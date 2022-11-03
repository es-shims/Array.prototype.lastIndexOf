'use strict';

var Get = require('es-abstract/2022/Get');
var HasProperty = require('es-abstract/2022/HasProperty');
var ToIntegerOrInfinity = require('es-abstract/2022/ToIntegerOrInfinity');
var ToLength = require('es-abstract/2022/ToLength');
var ToObject = require('es-abstract/2022/ToObject');
var ToString = require('es-abstract/2022/ToString');
var callBound = require('call-bind/callBound');
var isNegativeZero = require('is-negative-zero');
var isString = require('is-string');

// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var $split = callBound('String.prototype.split');

var $min = Math.min;

module.exports = function lastIndexOf(searchElement) {
	var OO = ToObject(this);
	var O = splitString && isString(OO) ? $split(OO, '') : OO;
	var len = ToLength(Get(O, 'length'));

	if (len === 0) {
		return -1;
	}

	var fromIndex;
	if (arguments.length > 1) {
		fromIndex = arguments[1];
	}
	var n = arguments.length > 1 ? ToIntegerOrInfinity(fromIndex) : len - 1;
	var k;
	if (n >= 0) {
		k = isNegativeZero(n) ? 0 : $min(n, len - 1);
	} else {
		// Assert: n < 0
		k = len + n;
	}

	while (k >= 0) {
		var kPresent = HasProperty(O, ToString(k));
		if (kPresent) {
			var elementK = Get(O, ToString(k));
			var same = searchElement === elementK;
			if (same) {
				return k;
			}
		}
		k -= 1;
	}
	return -1;
};
