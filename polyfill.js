'use strict';

var callBound = require('call-bound');
var $lastIndexOf = callBound('Array.prototype.lastIndexOf', true);

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	// Firefox 2.0 (but not 2.0.0.9) bug, see https://github.com/es-shims/es5-shim/pull/123
	if ($lastIndexOf && $lastIndexOf([0, 1], 0, -3) === -1) {
		return Array.prototype.lastIndexOf;
	}

	return implementation;
};
