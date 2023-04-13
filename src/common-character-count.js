const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s2Arr = s2.split("");
  let count = 0;
  for (const item of s1) {
    let index = s2Arr.indexOf(item, 0);
    if (index === -1) continue;
    count++;
    delete s2Arr[index];
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
