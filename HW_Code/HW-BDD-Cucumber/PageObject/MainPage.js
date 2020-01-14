import AbstractPage from './AbstractPage';
import { elementIsPresent } from '../Helpers/waiters';
import { $, browser } from 'protractor';

class MainPage extends AbstractPage {
  constructor() {
    super();
  }
  openMainPage() {
    this.openPage('https://www.ebay.com/');
  }

  getKeyElement() {
    return $('a[href="https://www.ebay.com/"]');
  }

  getSearchField() {
    return $('input.ui-autocomplete-input');
  }

  getSearchButton() {
    return $('input[type="submit"]');
  }

  searchItem(request) {
    this.getSearchField()
      .click()
      .then(this.getSearchField().sendKeys(request));
  }

  clickSearchButton() {
    this.getSearchButton().click();
  }
}

export default new MainPage();
