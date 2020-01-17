import { expect } from 'chai';

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

  // getTitle() {
  //   return browser.getTitle();
  // }

  // switchToFrame(frameLocator) {
  //   browser.switchTo().frame(frameLocator.getWebElement());
  // }

  // getAttributeParameter(locator, attributeType, regExp) {
  //   return locator.getAttribute(attributeType).then(txt => txt.match(regExp)[0]);
  // }

  // getAttributeParameters(locator, attributeType, regExp) {
  //   return locator.getAttribute(attributeType).then(txt => txt.match(regExp));
  // }
  // switchToPageFrame() {
  //   browser.switchTo().defaultContent();
  // }
}

export default AbstractPage;
