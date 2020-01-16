import AbstractPage from './AbstractPage';
import { elementIsPresent } from '../Helpers/waiters';
import { $ } from 'protractor';

class CartPage extends AbstractPage {
  constructor() {
    super();
  }

  get itemTitle() {
    return $('[data-test-id="cart-item-link"] span.BOLD');
  }

  get clearCartButton() {
    return $('button[data-test-id="cart-remove-item"]');
  }

  get emptyCartIdentifier() {
    return $('div.empty-cart');
  }

  async checkCartItem(searchKeyWord) {
    return await this.checkingTitle(this.itemTitle, searchKeyWord);
  }

  async clearCart() {
    await this.clearCartButton.click();
    await elementIsPresent(this.emptyCartIdentifier);
  }
}

export default new CartPage();
