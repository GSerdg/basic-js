const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newArr = arr.slice(0);
  let index = [];
  let rez = [];
  let j = 0;
  
  function getIndex(elem, pos = 0) {
    position = newArr.indexOf(elem, pos);
    if (position === -1) return;
    index.push(position);
    if (position === newArr.length - 1) return;
    getIndex(elem, position + 1);
  }
  
  getIndex(-1);

  console.log(newArr);
  newArr.sort((a, b) => a - b);
  newArr.splice(0, index.length);
  for (let i = 0; i < arr.length; i++) {
    if (index.includes(i)) {
      rez[i] = -1;
      continue;
    }
    rez[i] = newArr[j];
    j++;
  }
  return rez;
}

module.exports = {
  sortByHeight
};
