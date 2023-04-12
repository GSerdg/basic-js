const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!")
    }
    let rezArr = [];
    let excl;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        excl = i + 1;
        i++;
        continue;
      }
      if (arr[i] === '--discard-prev') {
        if (i - 1 === excl) continue;
        rezArr.pop();
        continue;
      }
      if (arr[i] === '--double-next') {
        if (i === arr.length - 1) continue;
        rezArr.push(arr[i+1]);
        continue;
      }
      if (arr[i] === '--double-prev') {
        if (i === 0 || i - 1 === excl) continue;
        rezArr.push(rezArr[rezArr.length - 1]);
        continue;
      }
      rezArr.push(arr[i]);
    }
  return rezArr;
  } catch(e) {
    throw e;
  }
}

module.exports = {
  transform
};
