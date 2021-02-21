# array.prototype.lastindexof <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2015 spec-compliant `Array.prototype.lastindexof` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://www.ecma-international.org/ecma-262/6.0/).

Because `Array.prototype.lastIndexOf` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Example

```js
var lastIndexOf = require('array.prototype.lastindexof');
var assert = require('assert');

assert.equal(lastIndexOf([1, 2, 3], 2), 1);
assert.equal(lastIndexOf([1, 0, 1], 1), 2);
assert.equal(lastIndexOf([1, 2, 3], 4), -1);
assert.equal(lastIndexOf([NaN], NaN), -1);
```

```js
var lastIndexOf = require('array.prototype.lastindexof');
var assert = require('assert');
/* when Array#lastIndexOf is not present */
delete Array.prototype.lastIndexOf;
var shimmed = lastIndexOf.shim();
assert.equal(shimmed, lastIndexOf.getPolyfill());
assert.equal([1, 2, 3].lastIndexOf(2), 1);
assert.equal([1, 0, 1].lastIndexOf(1), 2);
assert.equal([1, 2, 3].lastIndexOf(4), -1);
assert.equal([NaN].lastIndexOf(NaN), -1);
```

```js
var lastIndexOf = require('array.prototype.lastindexof');
var assert = require('assert');
/* when Array#lastIndexOf is present */
var shimmedMap = lastIndexOf.shim();
assert.equal(shimmedMap, Array.prototype.lastIndexOf);
assert.equal([1, 2, 3].lastIndexOf(2), 1);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.lastindexof
[npm-version-svg]: https://versionbadg.es/es-shims/Array.prototype.lastIndexOf.svg
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.lastIndexOf.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.lastIndexOf
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.lastIndexOf/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.lastIndexOf#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.lastindexof.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.lastindexof.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.lastindexof.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.lastindexof
