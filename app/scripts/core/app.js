'use strict';

angular.module('app.directives', []);
angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.routes', ['ui.router']);

angular.module('app', [
  'ngStorage',

  'app.directives',
  'app.controllers',
  'app.services',
  'app.routes'
]);
