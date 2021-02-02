"use strict";

/**
 *	A simple module example
 */

exports.randomNumber = (max = 1) => {
	return Math.random() * max;
};

exports.myDateTime = function() {
	return Date();
};
