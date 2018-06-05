angular.module('app.services')
.service('PokedexDB', [
  '$localStorage',
  '$q',
  'Queries',
  'FETCH_LIMIT',

  function ($localStorage, $q, Queries, FETCH_LIMIT) {

    $localStorage.pokedex = $localStorage.pokedex || {};
    $localStorage.pokedex.DB = $localStorage.pokedex.DB || [];
    $localStorage.pokedex.indexes = $localStorage.pokedex.indexes || {};

    var DB = $localStorage.pokedex.DB,
        indexes = $localStorage.pokedex.indexes;

    return {
      getPokemon: function (offset) {
        var def = $q.defer();

        var _persistPokemon = function (pokemon) {
          pokemon.forEach(function (_pokemon_) {
            var idMatch = _pokemon_.url.match(/\/\d+/),
                id = idMatch && idMatch[0].substring(1);

            if(!id) return;

            if(!indexes[id]) {  //Pokemon already not cached
              indexes[id] = _pokemon_;
              DB.push(_pokemon_);
            }
          })
        };

        if(DB.length > 0 && DB.length >= offset) {  //If total cached pokemon is greater or equals to the offset, serve from cache
          def.resolve(angular.copy(DB));
        }
        else {
          Queries.getPokemon(FETCH_LIMIT, offset)
          .then(function (response) {
            if (response.status === 200) {
              var pokemon = response.data.results;

              _persistPokemon(pokemon);

              def.resolve(pokemon);
            }
            else {
              def.reject(response.error)
            }
          });
        }

        return def.promise;
      }
    };
  }]);
