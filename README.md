# Pokedex

Pokedex - your personal encyclopedia for your pokemon adventures !

![alt tag](https://github.com/avirati/pokedex/raw/master/screenshots/1.png)
![alt tag](https://github.com/avirati/pokedex/raw/master/screenshots/2.png)
![alt tag](https://github.com/avirati/pokedex/raw/master/screenshots/3.png)

### Tech

Pokedex uses a number of open source projects to work properly:

* [AngularJS]
* [Angular Materialize]
* [Materialize]

* [PokeAPI]

### Build

You need Grunt and Compass installed globally:

```sh
$ gem install compass 
$ npm install -g grunt
```

```sh
$ git clone https://github.com/avirati/pokedex
$ cd pokedex
$ npm install
$ bower install

$ grunt
$ cd dist/
$ python -m SimpleHTTPServer <PORT>

OR

$ grunt serve
```

### Optimisations

Since pokeapi is a free service, I have implemented various caching techniques which ensure we don't bombard the service unnecessarily :). Some key points to note :

1. An initial list of 20 pokemon is fetched and is stored in localStorage. The next reload for these 20 results will not trigger an API call.
2. As you scroll down, more pokemon will be fetched (paginated calls) and added to the list. These are again, cached in localStorage.
3. The initial list contains very few properties such as name and url for the pokemon. An extensive data is pulled once you click on the pokeball :). This is cached with respect to a pokemon object, under the key : 'researchData'. This will have data like moves, stats etc.
4. The sprites will be cached in service worker layer so that we do not fetch images over and over again.
5. The pokemon data is indexed by id which helps to keep the search complexity to n(1)


License
----

MIT


**Free Software, Hell Yeah!**


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [AngularJS]: https://angularjs.org/
   [Angular Materialize]: https://github.com/krescruz/angular-materialize
   [Materialize]: http://materializecss.com
   [PokeAPI]: https://pokeapi.co/
   
