import { waitForVisibleElement } from '../../helpers/waiters';
import { element, browser } from 'protractor';
import AbstractPage from './AbstractPage';
import { logger } from '../../log4js/logger';

class LoginPage extends AbstractPage {
  constructor() {
    super();
  }

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
    await this.highlightElement(this.loginInput);
    await browser.sleep(1500);
    await this.loginInput.sendKeys(login);
  }

  async clickLoginNext() {
    await this.highlightElement(this.loginNextButton);
    await this.loginNextButton.click();
  }

  async enterPassword(password) {
    await waitForVisibleElement(this.passwordInput, 'password');
    await this.highlightElement(this.passwordInput);
    await this.passwordInput.sendKeys(password);
  }

  async clickPasswordNext() {
    await this.highlightElement(this.passwordNextButton);
    await this.passwordNextButton.click();
    //let el = await this.passwordNextButton;
    //console.log(el);
    // logger.info(`clickPasswordNext: ${this.passwordNextButton}`);
    // this.passwordNextButton.then(txt => {
    //   logger.info(`clickPasswordNext: ${txt}`);
    // });
  }
}
export default new LoginPage();
