const textIsPresentinElement = (elem, textIsPresent) => {
  let EC = protractor.ExpectedConditions;
  return browser.wait(EC.textToBePresentInElement(elem, textIsPresent), 5000);
};

export { textIsPresentinElement };
