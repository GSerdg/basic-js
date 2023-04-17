const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length + 2; i++) {
    arr[i] = new Array(matrix[0].length + 2);
    arr[i].fill(0);
  }

  for (let i = 1; i < matrix.length + 1; i++) {
    for (let j = 1; j < matrix[1].length + 1; j++) {
      if (matrix[i - 1][j - 1]) {
        arr[i - 1][j - 1]++;
        arr[i - 1][j]++;
        arr[i - 1][j + 1]++;
        arr[i][j - 1]++;
        arr[i][j + 1]++;
        arr[i + 1][j - 1]++;
        arr[i + 1][j]++;
        arr[i + 1][j + 1]++;
      }
    }
  }
  arr.pop();
  arr.shift();
  for (const item of arr) {
    item.pop();
    item.shift();
  }
  return arr;
}


module.exports = {
  minesweeper
};
