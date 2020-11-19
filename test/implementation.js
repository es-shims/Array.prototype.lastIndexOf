'use strict';

var callBind = require('call-bind');
var test = require('tape');

var lastIndexOf = require('../implementation');
var runTests = require('./tests');

var hasStrictMode = require('has-strict-mode')();

test('as a function', function (t) {
	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		/* eslint no-useless-call: 0 */
		st['throws'](function () { lastIndexOf.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { lastIndexOf.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(lastIndexOf), t);

	t.end();
});
