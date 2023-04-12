const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  try {
    //throw new Error("Invalid date!");
    if (date === undefined) return "Unable to determine the time of year!";
    //if (typeof(date) !== "object") return "Invalid date!";
    if (Object.keys(date).length > 0) throw new Error("Invalid date!");
    if (date.getMonth() < 11 && date.getMonth() > 7) return "autumn";
    if (date.getMonth() < 8 && date.getMonth() > 4) return "summer";
    if (date.getMonth() < 5 && date.getMonth() > 1) return "spring";
    return "winter";
  } catch (e) {
    //throw e;
    try {
      throw new Error("Invalid date!");
    } catch (err) {
      throw err;
    }
  }
}


module.exports = {
  getSeason
};
