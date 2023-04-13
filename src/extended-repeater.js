const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let tmp = [];
  let strAddition = '';
  let addition = options.addition;
  let additionSeparator = options.additionSeparator || '|';
  let separator = options.separator || '+';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let repeatTimes = options.repeatTimes || 1;

  if (str === null) {
    str = 'null';
  } else if (typeof(str) !== 'string' && typeof(str) !== 'object') {
    str = str.toString();
  }
  if (addition === null) {
    addition = 'null';
  } else if (typeof(addition) !== 'string' && typeof(addition) !== 'undefined' && typeof(addition) !== 'object') {
    addition = addition.toString();
  }

  if (addition !== "") {
    for (let i = 0; i < additionRepeatTimes; i++) {
      tmp.push(addition);
    }
    strAddition = tmp.join(additionSeparator);
    tmp = [];
  }
  str = str + strAddition;
  for (let i = 0; i < repeatTimes; i++) {
    tmp.push(str);
  }
  return tmp.join(separator);
}
module.exports = {
  repeater
};
