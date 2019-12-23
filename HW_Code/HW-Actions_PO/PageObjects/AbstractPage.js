class AbstractPage {
  constructor() {}

  openPage(url) {
    browser.get(url);
  }

  getTitle() {
    browser.getTitle();
  }

  switchToFrame(frameLocator) {
    browser.switchTo().frame(frameLocator.getWebElement());
  }
}

export default AbstractPage;
