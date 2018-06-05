angular.module('app.directives')
.directive("customHeader", [function () {
  return {
    restrict: "E",
    templateUrl: "views/common/header.html",
    replace: true
  }
}])
