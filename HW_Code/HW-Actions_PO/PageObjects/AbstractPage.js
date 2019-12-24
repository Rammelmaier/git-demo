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

  getAtributeParameter(locator, attributeType, regExpRuleProcessing) {
    let el = locator.getAttribute(attributeType);
    return el.getText().then(txt => txt.match(regExpRuleProcessing));
  }

  textIsPresentinElement(elem, textIsPresent) {
    let EC = protractor.ExpectedConditions;
    return browser.wait(EC.textToBePresentInElement(elem, textIsPresent), 5000);
  }
}

export default AbstractPage;
