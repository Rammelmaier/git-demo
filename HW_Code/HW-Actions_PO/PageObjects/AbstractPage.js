class AbstractPage {
  constructor() {}

  openPage(url) {
    browser.get(url);
  }

  getTitle() {
    return browser.getTitle();
  }

  switchToFrame(frameLocator) {
    browser.switchTo().frame(frameLocator.getWebElement());
  }

  getAttributeParameter(locator, attributeType, regExp) {
    let attribute = locator.getAttribute(attributeType);
    return attribute.getText().then(txt => txt.match(regExp));
  }

  switchToParentFrame() {
    browser.switchTo().defaultContent();
  }
}

export default AbstractPage;
