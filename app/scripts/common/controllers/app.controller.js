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

      getPokemon: function () {
        PokedexDB.getPokemon(currentOffset)
        .then(function (pokemon) {
          $scope.pokemon = pokemon;
          currentOffset += FETCH_OFFSET;
        })
      },

      init: function () {
        $scope.getPokemon();
      }
    })

    $scope.init()
  }])
