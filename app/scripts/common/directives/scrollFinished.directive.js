angular.module('app.directives').
directive('scrollFinished', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var elem = element[0];
      element.bind('scroll', function () {
        if (elem.scrollHeight - (elem.scrollTop + elem.offsetHeight) < 500) { //at the bottom
          scope.$apply(attrs.scrollFinished);
        }
      })
    }
  }
});
