angular.module('app.controllers')
.controller('ctrl.pokedex', [
  '$scope',
  'PokedexDB',
  'FETCH_OFFSET',

  function ($scope, PokedexDB, FETCH_OFFSET) {

    //Variables
    angular.extend($scope, {
      currentOffset: 0,
      flags: {
        fetching: false,
        filteredItemsLength: 0
      }
    });

    //Functions
    angular.extend($scope, {

      getPokemon: function (getSaved) {
        $scope.flags.fetching = true;
        PokedexDB.getPokemon($scope.currentOffset, getSaved)
        .then(function (pokemon) {
          $scope.pokemon = pokemon;
          if($scope.currentOffset === 0) {
            //In case of cached data, set offset to total length
            $scope.currentOffset = pokemon.length;
          }
          else {
            $scope.currentOffset += FETCH_OFFSET;
          }

          $scope.flags.fetching = false;
          $scope.filterPokemon("");
        })
      },

      showSavedPokemon: function () {
        var getSaved = true;
        PokedexDB.getPokemon($scope.currentOffset, getSaved)
        .then(function (pokemon) {
          $scope.pokemon = pokemon;
        })
      },

      showAllPokemon: function () {
        PokedexDB.getPokemon($scope.currentOffset)
        .then(function (pokemon) {
          $scope.pokemon = pokemon;
        })
      },

      filterPokemon: function (query) {
        $scope.flags.filteredItemsLength = 0;
        query = query || "";
        $scope.pokemon.forEach(function (_pokemon_) {
          var match = _pokemon_.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
          _pokemon_.hide = !match;
          if(!_pokemon_.hide) {
            $scope.flags.filteredItemsLength++;
          }
        })
      },

      fetchMorePokemon: function () {
        //Do not fetch if fetch is already in progress OR filter is applied
        if($scope.flags.fetching || $scope.flags.filteredItemsLength !== $scope.pokemon.length) return;

        $scope.getPokemon();
      },

      init: function () {
        $scope.getPokemon()
      }
    })

    $scope.init()
  }])
