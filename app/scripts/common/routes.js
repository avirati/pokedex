'use strict'

/**
 * @author Avinash Verma
 *
 * Governs routing in the App
 *
 * @example N/A
 * @param N/A
 */
angular.module('app.routes')
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('pokemon', {
    url: "",
    templateUrl: 'views/pages/app.html',
    controller: 'ctrl.pokedex'
  })
}]);
