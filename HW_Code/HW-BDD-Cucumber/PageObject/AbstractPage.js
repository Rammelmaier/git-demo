import { expect } from 'chai';

class AbstractPage {
  constructor() {}

  async openPage(url) {
    await browser.get(url);
  }

  async checkingTitle(locator, searchKeyWord) {
    const title = locator.getText();
    await expect(title).to.include(searchKeyWord);
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
