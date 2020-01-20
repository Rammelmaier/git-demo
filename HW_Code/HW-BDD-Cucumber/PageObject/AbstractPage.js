import { expect } from 'chai';
import { elementIsPresent } from '../Helpers/waiters';

class AbstractPage {
  constructor() {}

  async openPage(url) {
    await browser.get(url);
  }

  async checkingTitle(locator, searchKeyWord) {
    const title = await locator.getText();
    const keyWord = await searchKeyWord.match(/\w+/)[0];
    return await expect(title).to.include(keyWord);
  }

  async setValue(locator, selector, message) {
    let optionPresent = expect(await elementIsPresent(locator)).to.be.true;
    console.log(optionPresent);
    if (optionPresent == true) {
      let y = 18 + 18 * selector;
      await browser
        .actions()
        .click(locator)
        .mouseMove({ x: 0, y: y })
        .mouseDown()
        .mouseUp()
        .perform();
    } else {
      return console.log(message);
    }
  }
}

export default AbstractPage;
