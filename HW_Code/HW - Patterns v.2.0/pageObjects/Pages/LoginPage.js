import { waitForVisibleElement } from '../../helpers/waiters';

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

  enterLogin(login) {
    waitForVisibleElement(this.loginInput, 'login');
    this.loginInput.sendKeys(login);
  }

  clickLoginNext() {
    this.loginNextButton.click();
  }

  enterPassword(password) {
    waitForVisibleElement(this.passwordInput, 'password');
    this.passwordInput.sendKeys(password);
  }

  clickPasswordNext() {
    this.passwordNextButton.click();
  }
}
export default new LoginPage();
