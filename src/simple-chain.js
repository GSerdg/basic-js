const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    try {
      if (position <= 0 || typeof (position) !== "number" || position > this.chainArr.length) {
        throw new Error('You can\'t remove incorrect link!');
      }
      this.chainArr.splice(position - 1, 1);
      return this;
    } catch (error) {
      this.chainArr = [];
      throw error;
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let str = this.chainArr.join('~~');
    this.chainArr = [];
    return str;
  }
};


module.exports = {
  chainMaker
};
