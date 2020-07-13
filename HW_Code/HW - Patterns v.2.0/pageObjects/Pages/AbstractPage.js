class AbstractPage {
  constructor() {}

  async highlightElement(el) {
    const styleOpt = 'color: Black; border: 2px solid red;';
    const styleOpt2 = 'color: Black; border: 2px solid lime;';
    return await browser.driver
      .executeScript("arguments[0].setAttribute('style', arguments[1]);", el.getWebElement(), styleOpt)
      .then(browser.sleep(500)).then(browser.driver
        .executeScript("arguments[0].setAttribute('style', arguments[1]);", el.getWebElement(), styleOpt2))
      // .then(
      //   function() {
      //     return browser.wait(
      //       function() {
      //         return el.getCssValue('border').then(function(border) {
      //           console.log(border.toString());
      //           return border.toString().indexOf('2px solid rgb(255,') > -1;
      //         });
      //       },
      //       700,
      //       'Style is not applied'
      //     );
      //   },
      //   function(err) {
      //     console.log('error is :' + err);
      //   }
      // );
  }
}

export default AbstractPage;
