angular.module('app.directives')
.directive("customFooter", [function () {
  return {
    restrict: "E",
    templateUrl: "views/common/footer.html",
    replace: true
  }
}])
