# Pokedex

Pokedex - your personal encyclopedia for your pokemon adventures !
[Demo]

![alt tag]()

### Tech

Task Manager uses a number of open source projects to work properly:

* [AngularJS]
* [Angular Materialize]
* [Materialize]
* [jQuery]
* [Jasmine]
* [Karma]


### Build

You need Grunt and Compass installed globally:

```sh
$ gem install compass 
$ npm install -g grunt
```

```sh
$ git clone https://github.com/avirati/pokedex pokedex
$ cd pokedex
$ npm install
$ npm install --dev (if you want to run tests) 
$ bower install
$ grunt
$ cd dist/
$ python -m SimpleHTTPServer <PORT>
```

### Run the project

```sh
open http://localhost:<PORT>
```

### Testing

```sh
$ npm install -g karma
$ cd test/
$ karma start
```

License
----

MIT


**Free Software, Hell Yeah!**


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Demo]: http://trellolike.herokuapp.com/
   [AngularJS]: https://angularjs.org/
   [Angular Materialize]: https://github.com/krescruz/angular-materialize
   [Materialize]: http://materializecss.com
   [jQuery]: https://jquery.com/
   [Jasmine]: http://jasmine.github.io/
   [Karma]: https://karma-runner.github.io/0.13/index.html
