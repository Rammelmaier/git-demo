import LoginPage from '../../pageObjects/HW3/LoginPage';
import InboxPage from '../../pageObjects/HW3/InboxPage';
import MailPage from '../../pageObjects/HW3/MailPage';
import Services from '../../pageObjects/HW3/Services';

const URL = 'https://gmail.com';
const EXPECT_BROWSER_TITLE = 'Gmail';
const LOGIN = 'nalex7415@gmail.com';
const PASSWORD = '12wasder56';
const MAIL_SEND_TO = 'nalex7415@gmail.com';
const MAIL_SUBJECT = 'test-letter';
let MAIL_MESSAGE = Math.floor(Math.random() * 100000).toString();
let INCOME_MAIL = element(by.cssContainingText('span', `${MAIL_MESSAGE}`));
let MAIL_CONTAIN = INCOME_MAIL.getText().then(text => text.match(/\d+/)[0]);

describe('Test send mail with Protractor', function() {
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  afterEach(() => {
    browser.waitForAngularEnabled(true);
  });

  it('chrome should open login page', function() {
    browser.waitForAngularEnabled(false);
    //browser.get(URL);
    Services.openPage(URL);
    expect(browser.getTitle()).toEqual(EXPECT_BROWSER_TITLE);
  });

  it('should input credentials and login', function() {
    LoginPage.enterLogin(LOGIN);
    LoginPage.clickLoginNext();
    LoginPage.enterPassword(PASSWORD);
    LoginPage.clickPasswordNext();
    // browser.waitForAngularEnabled(false);
    InboxPage.loggedToInboxSuccesful();
    //browser.sleep(5000); //just for check
  });

  it('should send mail to itself', function() {
    InboxPage.clickComposeButton();
    //browser.sleep(3000);
    //MailPage.clickToField();
    // browser.waitForAngularEnabled(false);
    MailPage.enterDataTo(MAIL_SEND_TO);
    //MailPage.clickSubjectField();
    MailPage.enterDataSubject(MAIL_SUBJECT);
    //MailPage.clickMessageField();
    MailPage.enterMessage(`${MAIL_MESSAGE}`);
    MailPage.clickSendButton();
    // browser.waitForAngularEnabled(false);
    InboxPage.checkingVisibilityMailInbox();
    //browser.sleep(5000);
    expect(MAIL_CONTAIN).toEqual(MAIL_MESSAGE);
    //console.log(`Keyword is: ${MAIL_MESSAGE}.`);
    //console.log(`Message Keyword is: ${MAIL_CONTAIN}`)
  });
});

export { INCOME_MAIL, MAIL_CONTAIN, MAIL_MESSAGE };
