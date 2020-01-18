'use strict';

/*
 * var canDistinguishSparseFromUndefined = 0 in [undefined]; // IE 6 - 8 have a bug where this returns false.
 * var undefinedIfNoSparseBug = canDistinguishSparseFromUndefined ? undefined : { valueOf: function () { return 0; } };
 */

module.exports = function (lastIndexOf, t) {
	t.equal(lastIndexOf([], undefined), -1, 'empty array + undefined yields -1');
	t.equal(lastIndexOf([1], 1), 0, 'array + only item yields its lastIndexOf');
	t.equal(lastIndexOf([1, 1], 1), 1, 'array + duplicate items yields its lastIndexOf');
	t.equal(lastIndexOf([NaN], NaN), -1, 'array with NaN + NaN yields -1');
	var sparse = [1, , 3]; // eslint-disable-line no-sparse-arrays
	delete sparse[1]; // Firefox 2.0 requires this to make the array actually be sparse
	t.equal(lastIndexOf(sparse, undefined), -1, 'sparse array + undefined yields -1');
};
