import AbstractPage from './AbstractPage';
import { $, browser } from 'protractor';
import { elementIsPresent, elementIsClickable } from '../Helpers/waiters';

class ResultPage extends AbstractPage {
  constructor() {
    super();
  }

  get pageElement() {
    return $('#qtyTextBox');
  }

  get resultName() {
    return $('#itemTitle');
  }

  get cartButton() {
    return $('#isCartBtn_btn');
  }

  get inspectCartButton() {
    return $('svg.gh-cart-icon');
  }

  get capacityOption() {
    return $('#msku-sel-1');
  }

  get colorOption() {
    return $('msku-sel-2');
  }

  async resultPageOpened() {
    return await elementIsPresent(this.pageElement);
  }

  async checkResult(keyWord) {
    return await this.checkingTitle(this.resultName, keyWord);
  }

  async addCartClickable() {
    return await elementIsClickable(this.cartButton);
  }

  async setCapacity(selector) {
    await this.setValue(this.capacityOption, selector, 'Storage Capacity option is unavailable');
  }

  async setColor(selector) {
    await this.setValue(this.colorOption, selector, 'Color option is unavailable');
  }

  // async chooseCapacity(selector) {
  //   let optionPresent = await elementIsPresent(this.capacityOption);
  //   async () => {
  //     if (optionPresent == true) {
  //       browser
  //         .actions()
  //         .click(this.capacityOption)
  //         .mouseMove({ x: 0, y: 20 + 20 * selector })
  //         .mouseUp()
  //         .perform();
  //     } else {
  //       return await console.log('Storage Capacity option is unavailable');
  //     }
  //   };
  // }

  // async chooseColour(selector) {
  //   let optionPresent = await elementIsPresent(this.colourOption);
  //   async () => {
  //     if (optionPresent == true) {
  //       browser
  //         .actions()
  //         .click(this.colourOption)
  //         .mouseMove({ x: 0, y: 20 + 20 * selector })
  //         .mouseUp()
  //         .perform();
  //     } else {
  //       return await console.log('Colour option is unavailable');
  //     }
  //   };
  // }

  async clickAddCartButton() {
    await this.cartButton.click();
  }

  async clickGoCartButton() {
    await this.inspectCartButton.click();
  }
}

export default new ResultPage();
