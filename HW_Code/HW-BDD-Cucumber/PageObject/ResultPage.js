import AbstractPage from './AbstractPage';
import { $ } from 'protractor';
import { elementIsClickable } from '../Helpers/waiters';

class ResultPage extends AbstractPage {
  constructor() {
    super();
  }

  get resultName() {
    return $('#itemTitle');
  }

  get cartButton() {
    return $('isCartBtn_btn');
  }

  get inspectCartButton() {
    return $('svg.gh-cart-icon');
  }

  async checkResult(keyWord) {
    return await this.checkingTitle(this.resultName, keyWord);
  }

  async addCartClickable() {
    return await elementIsClickable(this.cartButton);
  }
  async clickAddCartButton() {
    await this.cartButton.click();
  }

  async clickGoCartButton() {
    await this.inspectCartButton.click();
  }
}

export default new ResultPage();
