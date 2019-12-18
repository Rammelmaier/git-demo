const waitForVisibleElement = (element, timeout, field) => { //awaiting visibility of element
  let until = protractor.ExpectedConditions;
  browser.wait(until.visibilityOf(element), timeout, `Waiting for ${field} visible failed`);
}

//  const waitForPresenceElement = (element, timeout, waitFor) => {
//    browser.wait(expect(element.isPresent()).toBeTruthy(), timeout, `Waiting for ${waitFor} element appear failed`);
// }

describe('Test send mail with Protractor', function () {
  it('chrome should open login page', function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://gmail.com');
    expect(browser.getTitle()).toEqual('Gmail');
  });

  it('should input credentials and login', function () {
    $('input[type="email"]').sendKeys('nalex7415@gmail.com');
    $('#identifierNext').click();

    waitForVisibleElement($('input[type="password"]'), 5000, 'password'); //awaiting of element

    $('input[type="password"]').sendKeys('12wasder56');
    element(by.xpath('//*[@id="passwordNext"]')).click();

    waitForVisibleElement($('a[title="Inbox"]'), 5000, 'Inbox');

    expect($('a[title="Inbox"]').isPresent()).toBeTruthy();

  });

  it('should mail to someone and check it', function () {

    element(by.xpath('//div[contains(text(), "Compose")]')).click();

    element(by.name('to')).sendKeys('nalex7415@gmail.com');
    element(by.name('subjectbox')).sendKeys('test-letter');
    const keyCheck = (Math.floor(Math.random() * 100000)).toString();
    $(`div[aria-label='Message Body']`).sendKeys(`${keyCheck}`);
    element(by.css('div[aria-label="Send ‪(Ctrl-Enter)‬"]')).click();

    //waitForVisibleElement(by.xpath('//div[contains(text(), "Compose")]'), 5000, 'Compose Button');

    //waitForVisibleElement(by.linkText('Inbox'), 5000, 'Inbox');

    // browser.sleep(5000);
    //element(by.linkText('Inbox')).click();
    browser.sleep(3000);

    // waitForVisibleElement(by.cssContainingText('span', `${keyCheck}`), 5000, 'Message body');

    let checkMail = element(by.cssContainingText('span', `${keyCheck}`));
    expect(checkMail.getText().then(text => text.match(/\d+/)[0])).toEqual(`${keyCheck}`);
    console.log(`keyCheck is + ${keyCheck}`);

  });

});