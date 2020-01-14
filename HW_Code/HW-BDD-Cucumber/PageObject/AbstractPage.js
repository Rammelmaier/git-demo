class AbstractPage {
  constructor() {}

  openPage(url) {
    browser.get(url);
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
