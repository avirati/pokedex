angular.module('app.controllers')
.controller('ctrl.pokedex', [
  '$scope',
  'PokedexDB',
  'FETCH_OFFSET',

  function ($scope, PokedexDB, FETCH_OFFSET) {

    var currentOffset = 0;

    //Variables
    angular.extend($scope, {});

    //Functions
    angular.extend($scope, {

      getPokemon: function (getSaved) {
        PokedexDB.getPokemon(currentOffset, getSaved)
        .then(function (pokemon) {
          $scope.pokemon = pokemon;
          currentOffset += FETCH_OFFSET;
        })
      },

      showSavedPokemon: function () {
        var getSaved = true;
        PokedexDB.getPokemon(currentOffset, getSaved)
        .then(function (pokemon) {
          $scope.pokemon = pokemon;
        })
      },

      showAllPokemon: function () {
        PokedexDB.getPokemon(currentOffset)
        .then(function (pokemon) {
          $scope.pokemon = pokemon;
        })
      },

      filterPokemon: function (query) {
        query = query || "";
        $scope.pokemon.forEach(function (_pokemon_) {
          var match = _pokemon_.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
          _pokemon_.hide = !match;
        })
      },

      init: function () {
        $scope.getPokemon();
      }
    })

    $scope.init()
  }])
