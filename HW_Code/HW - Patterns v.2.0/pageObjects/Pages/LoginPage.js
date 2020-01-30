import { waitForVisibleElement } from '../../helpers/waiters';
import { element } from 'protractor';

// LOGGER
const log4js = require('log4js');
log4js.configure({
  appenders: {
    logFile: { type: 'datefile', filename: '../../logs/status.log' },
    errorLog: { type: 'datefile', filename: '../../logs/error.log' },
    console: { type: 'console' },
  },

  categories: {
    default: { appenders: ['logFile', 'console'], level: 'info' },
    error: { appenders: ['errorLog'], level: 'error' },
  },
});

const logger = log4js.getLogger();

// LOGGER END

class LoginPage {
  constructor() {}

  get loginInput() {
    return $('input[type="email"]');
  }

  get loginNextButton() {
    return $('#identifierNext');
  }

  get passwordInput() {
    return $('input[autocomplete="current-password"]');
  }

  get passwordNextButton() {
    return $('#passwordNext');
  }

  async enterLogin(login) {
    await waitForVisibleElement(this.loginInput, 'login');
    await this.loginInput.sendKeys(login);
  }

  async clickLoginNext() {
    await this.loginNextButton.click();
  }

  async enterPassword(password) {
    await waitForVisibleElement(this.passwordInput, 'password');
    await this.passwordInput.sendKeys(password);
  }

  async clickPasswordNext() {
    await this.passwordNextButton.click();
    let el = await this.passwordNextButton;
    console.log(el);
    // logger.info(`clickPasswordNext: ${this.passwordNextButton}`);
    // this.passwordNextButton.then(txt => {
    //   logger.info(`clickPasswordNext: ${txt}`);
    // });
  }
}
export default new LoginPage();
