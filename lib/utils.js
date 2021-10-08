'use strict';

// utils is a library of generic helper functions not specific to butthorn //

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
 function isArray(val) {
  return toString.call(val) === '[object Array]';
}

module.exports = {
  isArray: isArray,
};