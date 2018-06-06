angular.module('app.controllers')
.controller('ctrl.pokeCard', [
  '$scope',
  'PokedexDB',

  function ($scope, PokedexDB) {

    var PokeCardCtrl = this;
    //Variables
    angular.extend(PokeCardCtrl, {
      flags: {
        loading: false
      }
    });

    //Functions
    angular.extend(PokeCardCtrl, {
      revealPokemon: function () {
        PokeCardCtrl.flags.loading = true;
        PokedexDB.getPokemonById($scope.pokemon.id)
        .then(function (researchData) {
          $scope.pokemon.researchData = researchData;
          PokeCardCtrl.flags.loading = false;
        });
      },
      toggleSavePokemon: function () {
        PokedexDB.toggleSavePokemon($scope.pokemon);
      },
      init: function () {
        $scope.pokemon = $scope.pokemonData;
      }
    })

    PokeCardCtrl.init()
  }])
