angular.module('app.controllers')
.controller('ctrl.binarySwitch', [
  '$scope', '$timeout',

  function ($scope, $timeout) {
    var BinarySwitchCtrl = this;

    //Variables
    angular.extend(BinarySwitchCtrl, {
      checkbox: false,
      filterText: ""
    });

    //Functions
    angular.extend(BinarySwitchCtrl, {

      onSwitchToggled: function () {
        $timeout(function () {
          if(BinarySwitchCtrl.checkbox) {
            $scope.onToggledOn();
          }
          else {
            $scope.onToggledOff();
          }
        });
      },

      filterPokemon: function (query) {
        $scope.onPokemonFilter({
          query: query
        });
      },

      init: function () {

      }
    })

    BinarySwitchCtrl.init()
  }])
