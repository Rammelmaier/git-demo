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
    return $('input[type="password"]');
  }

  get passwordNextButton() {
    return element(by.xpath('//*[@id="passwordNext"]'));
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
