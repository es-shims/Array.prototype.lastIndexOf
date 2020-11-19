'use strict';

var callBind = require('call-bind');
var callBound = require('call-bind/callBound');
var $lastIndexOf = callBound('Array.prototype.lastIndexOf', true);
var $arrayIndexOfApply = callBind.apply(Array.prototype.lastIndexOf);

var implementation = require('./implementation');

var patch = function lastIndexOf(searchElement) { // eslint-disable-line no-unused-vars
	var value = $arrayIndexOfApply(this, arguments); // eslint-disable-line no-invalid-this
	if (value === 0 && (1 / value) < 0) {
		return 0;
	}
	return value;
};

module.exports = function getPolyfill() {
	// Firefox 2.0 (but not 2.0.0.9) bug, see https://github.com/es-shims/es5-shim/pull/123
	if ($lastIndexOf && $lastIndexOf([0, 1], 0, -3) === -1) {
		return Array.prototype.lastIndexOf;
	}

	return implementation;
};
