//made by lordjbs#3049
class Logger {
  constructor() {

    this.log = (message) => {
      console.log(`[INFO] ${message}`);
    }

    this.warn = (message) => {
      console.log(`[WARNING] ${message}`);
    }

    this.error = (message) => {
      console.log(`[ERROR] ${message}`);
    }
  }
}

module.exports = Logger;
