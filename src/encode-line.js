const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length == 0) return '';
  let prev = str[0];
  let count = 1;
  let strRez = '';
  for (let i = 1; i < str.length; i++) {
    while (prev === str[i]) {
      count++;
      i++;
    }
    if (count === 1) {
      strRez += prev;
    } else {
      strRez += `${count}${prev}`;
    }
    if (i <= str.length - 1) {
      prev = str[i];
      count = 1;
    }
  }
  return count === 1 ? strRez += prev : strRez;
}



module.exports = {
  encodeLine
};
