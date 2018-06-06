angular.module('app.directives')
.directive("binarySwitch", [function () {
  return {
    restrict: "E",
    templateUrl: "views/common/binary-switch.html",
    replace: true,
    scope: {
      onToggledOn: '&',
      onToggledOff: '&',
      onPokemonFilter: '&'
    },
    controller: 'ctrl.binarySwitch',
    controllerAs: 'BinarySwitchCtrl'
  }
}]);
