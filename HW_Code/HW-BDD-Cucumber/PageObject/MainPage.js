import AbstractPage from './AbstractPage';
import { elementIsPresent } from '../Helpers/waiters';
import { $, browser } from 'protractor';

class MainPage extends AbstractPage {
  constructor() {
    super();
  }
  async openMainPage() {
    await this.openPage('https://www.ebay.com/');
  }

  get keyElement() {
    return $('a[href="https://www.ebay.com/"]');
  }

  get searchField() {
    return $('input.ui-autocomplete-input');
  }

  get searchButton() {
    return $('input[type="submit"]');
  }

  async ebayLogoIsPresent() {
    return await elementIsPresent(this.keyElement);
  }

  async searchItem(request) {
    await this.searchField.click().then(await this.searchField.sendKeys(request));
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }
}

export default new MainPage();
