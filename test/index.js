'use strict';

var lastIndexOf = require('..');
var bind = require('function-bind');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](bind.call(lastIndexOf, null, undefined, 'a'), TypeError, 'undefined is not an object');
		st['throws'](bind.call(lastIndexOf, null, null, 'a'), TypeError, 'null is not an object');
		st.end();
	});

	runTests(lastIndexOf, t);

	t.end();
});
