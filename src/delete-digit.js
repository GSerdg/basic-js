const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let a = n.toString().split('');
  let minIndex = a.length - 1;
  for (let i = a.length - 2; i >= 0; i--) {
    if (a[i] < a[i+1]) {
      minIndex = i;
    }
  }
  a.splice(minIndex, 1);
  return +a.join('');
}

module.exports = {
  deleteDigit
};
