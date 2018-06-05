angular.module('app.directives')
.directive("pokeCard", [function () {
  return {
    restrict: "E",
    templateUrl: "views/common/poke-card.html",
    replace: true,
    scope: {
      pokemonData: '='
    },
    controller: 'ctrl.pokeCard',
    controllerAs: 'PokeCardCtrl'
  }
}])
