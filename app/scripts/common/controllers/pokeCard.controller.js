angular.module('app.controllers')
.controller('ctrl.pokeCard', [
  '$scope',
  'PokedexDB',

  function ($scope, PokedexDB) {

    var PokeCardCtrl = this;
    //Variables
    angular.extend(PokeCardCtrl, {});

    //Functions
    angular.extend(PokeCardCtrl, {
      revealPokemon: function () {
        PokedexDB.getPokemonById($scope.pokemon.id)
        .then(function (researchData) {
          $scope.pokemon.researchData = researchData;
        });
      },
      init: function () {
        $scope.pokemon = angular.copy($scope.pokemonData)
      }
    })

    PokeCardCtrl.init()
  }])
