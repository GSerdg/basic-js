const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  if (domains.length === 0) return {};
  let arr = domains.map(a => a.split('.').reverse());
  arr.sort((a, b) => b.length - a.length);
  let i = 0;
  let rez = {};
  let prev = '';
  for (const item of arr[i]) {
    let count = 1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j].includes(item)) count++;
    }
    rez[`${prev}.${item}`] = count;
    prev += `.${item}`
  }
  return rez;
}


module.exports = {
  getDNSStats
};
