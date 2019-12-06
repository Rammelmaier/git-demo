let keyCheck;

const waitForVisibleElement = (element, timeout, field) => { //функция ожидания видимости элемента
  let until = protractor.ExpectedConditions;
  browser.wait(until.visibilityOf(element), timeout, `Waiting for ${field} visible failed`);
}

 const waitForPresenceElement = (element, timeout, waitFor) => {
   browser.wait(expect(element.isPresent()).toBeTruthy(), timeout, `Waiting for ${waitFor} element appear failed`);
}

describe('Test send mail with Protractor', function () {
  it('chrome should open login page', function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    expect(browser.getTitle()).toEqual('Gmail');
  });

  it('should input credentials and login', function () {
    $('input[type="email"]').sendKeys('nalex7415@gmail.com');
    $('#identifierNext').click();
    
    waitForVisibleElement($('input[type="password"]'), 5000, 'password'); //ожидание элемента

    $('input[type="password"]').sendKeys('12wasder56');
    element(by.xpath('//*[@id="passwordNext"]')).click();
    
    //browser.sleep(5000);
    // expect(browser.getTitle().toEqual('Inbox - nalex7415@gmail.com - Gmail');
    waitForVisibleElement($('a[aria-label="Inbox"]'), 5000, 'Inbox');
    ///waitForPresenceElement($('a[aria-label="Inbox"]'), 5000, 'Inbox');

    expect($('a[aria-label="Inbox"]').isPresent()).toBeTruthy();

  });

  it('should mail to someone and check it', function () {
   
    element(by.linkText('Sent')).click();
    
    waitForVisibleElement($('span','Send'), 5000, 'Send');
    
   // browser.sleep(5000);
    element(by.cssContainingText('span','Send')).click();
   
    element(by.name('to')).sendKeys('nalex7415@gmail.com');
    element(by.name('subjectbox')).sendKeys('test-letter');
    element(by.className('Am Al editable LW-avf tS-tW')).sendKeys(`${keyCheck = 100000000000000000 * Math.random().toString()}`);
    element(by.css('div[aria-label="Send ‪(Ctrl-Enter)‬"]')).click();
    
    //waitForVisibleElement(by.linkText('Inbox'), 5000, 'Inbox');
    
    browser.sleep(5000);
    element(by.linkText('Inbox')).click();
    browser.sleep(3000);
    
    //waitForVisibleElement(by.cssContainingText('span', `${keyCheck}`), 5000, 'Message body');

    let checkMail = element(by.cssContainingText('span', `${keyCheck}`));
    expect(checkMail.getText().then(text => text.match(/\d+/)[0])).toEqual(`${keyCheck}`);
    console.log(`keyCheck is + ${keyCheck}`);
  });
    
  });