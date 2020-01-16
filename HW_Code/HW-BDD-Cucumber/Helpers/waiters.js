const elementIsPresent = async (locator, timeout = 5000) => {
  let EC = protractor.ExpectedConditions;
  return await browser.wait(await EC.presenceOf(locator), timeout);
};

const elementIsClickable = async (locator, timeout = 5000) => {
  let EC = protractor.ExpectedConditions;
  browser.wait(await EC.elementToBeClickable(locator), timeout);
};

export { elementIsPresent, elementIsClickable };
