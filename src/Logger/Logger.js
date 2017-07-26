/** 
 *  @file Logger class to handle logging 
 *  @author Capuccino
 *  @author lordjbs
 * 
*/

const chalk = require('chalk');

/**
 * logger class that hhandles 3 basic levels of logging
 */

class Logger {

  /**
   * Generic info logging
   * @param {String} message message to print out
   * @static
   */
  static info (message) {
    return console.log(`${chalk.bgBlue('[INFO]')} ${chalk.blue(message)}`);
  };

  /**
   * Generic warning logging
   * @param {String} message message to print out
   */
  static warn (message) {
    return console.log(`${chalk.bgYellow('[WARN]')} ${chalk.yellow(message)}`);
  };

  /**
   * Generic error logging
   * @param {String} message message to print out
   * @static
   */
  static error (message) {
    return console.log(`${chalk.bgRed('[ERR]')} ${chalk.red(message)}`)
  }
}
module.exports = Logger;
