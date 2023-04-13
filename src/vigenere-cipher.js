const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(str, key) {
    try {
      if (str === undefined || key === undefined) {
        throw new Error('Incorrect arguments!');
      }
    } catch (error) {
      throw error;
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let tabula = this.tabula();
    let tmpCriptKey = "";
    let criptKey = '';
    let encode = '';
    let j = 0;
    while (str.length > tmpCriptKey.length) {
      tmpCriptKey += key;
    }
    for (const item of str) {
      if (item === " ") {
        criptKey += " ";
        continue;
      }
      criptKey += tmpCriptKey[j]
      j++;
    }
    let number;
    for (let i = 0; i < str.length; i++) {
      if (tabula[str[i]] === undefined) {
        encode += str[i];
      } else {
        number = tabula[str[i]] + tabula[criptKey[i]];
        if (number >= this.abc.length) {
          number = number - this.abc.length;
        }
        encode += this.abc[number];
      }
    }
    if (this.type === true || this.type === undefined) {
      return encode;
    }
    return encode.split("").reverse().join("");
  }
  decrypt(str, key) {
    try {
      if (str === undefined || key === undefined) {
        throw new Error('Incorrect arguments!');
      }
    } catch (error) {
      throw error;
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let tabula = this.tabula();
    let tmpCriptKey = "";
    let criptKey = "";
    let decode = '';
    let j = 0;
    while (str.length > tmpCriptKey.length) {
      tmpCriptKey += key;
    }
    for (const item of str) {
      if (item === " ") {
        criptKey += " ";
        continue;
      }
      criptKey += tmpCriptKey[j]
      j++;
    }
    let number;
    for (let i = 0; i < str.length; i++) {
      if (tabula[str[i]] === undefined) {
        decode += str[i];
      } else {
        number = tabula[str[i]] - tabula[criptKey[i]];
        if (number < 0) {
          number = number + this.abc.length;
        }
        decode += this.abc[number];
      }
    }
    if (this.type === true || this.type === undefined) {
      return decode;
    }
    return decode.split("").reverse().join("");
  }

  tabula() {
    let tabula = this.abc.split("");
    tabula = tabula.reduce(function (object, value, index) {
      object[value] = index;
      return object;
    }, {});
    return tabula;
  }
}


module.exports = {
  VigenereCipheringMachine
};
