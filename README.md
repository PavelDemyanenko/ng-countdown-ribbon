# ng-countdown-ribbon [![Build Status](https://travis-ci.org/PavelDemyanenko/ng-countdown-ribbon.svg?branch=master)](https://travis-ci.org/PavelDemyanenko/ng-countdown-ribbon)
[![NPM version][npm-version-image]][npm-url] ![Dependency Status](https://david-dm.org/PavelDemyanenko/ng-countdown-ribbon.svg) [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url]

A simple module for displaying days remaining before the scheduled event on a ribbon.

## [Demo](http://paveldemyanenko.github.io/ng-countdown-ribbon/index.html)

## [Changelog](CHANGELOG.md)

## Usage

After including *ng-countdown-ribbon.min.js* and *ng-countdown-ribbon.min.css*, inject the ng-countdown-ribbon provider into your project.

```javascript
var app = angular.module('demo', ['ngCountdownRibbon']);
```
Now you can trigger countdown ribbon from anywhere in your app.  To display a ribbon, just use the `set` method.

First parameter is the end date and second is for the event link. Use date format in [ISO 8601](https://xkcd.com/1179/).

```javascript
ngCountdownRibbon.set('2077-03-26', 'http://amzn.com/w/ZWFNUL8AGNLP');
```
## License

ng-countdown-ribbon is freely distributable under the terms of the [MIT license](LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/ng-countdown-ribbon
[npm-version-image]: http://img.shields.io/npm/v/ng-countdown-ribbon.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/ng-countdown-ribbon.svg?style=flat
