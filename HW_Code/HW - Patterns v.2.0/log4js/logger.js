class logger {
  constructor() {
    // this.profile = `[$ {browser.profile}]`;
    this.logger = require('log4js').getLogger();
  }
  spec(log) {
    browser.controlFlow().execute(() => this.logger.info(log));
  }
  info(log) {
    browser.controlFlow().execute(() => this.logger.debug(log));
  }
  passed(log) {
    browser.controlFlow().execute(() => this.logger.info(log));
  }
  failed(log) {
    browser.controlFlow().execute(() => this.logger.error(log));
  }
  warning(log) {
    browser.controlFlow().execute(() => this.logger.warn(log));
  }
}

export default new logger();
