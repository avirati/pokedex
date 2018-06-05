angular.module('app.services')
.service('Queries', [ '$http', 'BASE_URL', function ($http, BASE_URL) {

  return {
    getPokemon: function (limit, offset) {
      return $http({
        method: 'GET',
        url: BASE_URL + '/pokemon?' + 'limit=' + limit + '&offset=' + offset,
        cache: true
      })
    }
  };
}]);
