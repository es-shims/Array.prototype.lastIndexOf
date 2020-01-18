'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayIndexOf() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ lastIndexOf: polyfill },
		{ lastIndexOf: function () { return Array.prototype.lastIndexOf !== polyfill; } }
	);
	return polyfill;
};
