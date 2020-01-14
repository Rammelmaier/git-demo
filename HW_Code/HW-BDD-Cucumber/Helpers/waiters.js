const elementIsPresent = (locator, timeout = 5000) => {
  let EC = protractor.ExpectedConditions;
  return browser.wait(EC.presenceOf(locator), timeout);
};

export { elementIsPresent };
