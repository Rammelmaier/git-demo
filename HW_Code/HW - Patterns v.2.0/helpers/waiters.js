const waitForVisibleElement = (element, field, timeout = 20000) => {
  let until = protractor.ExpectedConditions;
  browser.wait(until.visibilityOf(element), timeout, `Waiting for ${field} visible failed`);
};

export { waitForVisibleElement };
