import LoginPage from '../../pageObjects/HW3/LoginPage';
import InboxPage from '../../pageObjects/HW3/InboxPage';
import MailPage from '../../pageObjects/HW3/MailPage';
import Steps from '../../pageObjects/HW3/Steps';

const URL = 'https://gmail.com';
const EXPECT_BROWSER_TITLE = 'Gmail';
const LOGIN = 'nalex7415@gmail.com';
const PASSWORD = '12wasder56';
const MAIL_SEND_TO = 'nalex7415@gmail.com';
const MAIL_SUBJECT = 'test-letter';
const MAIL_MESSAGE = Math.floor(Math.random() * 100000).toString();

describe('Test send mail with Protractor', function() {
  it('chrome should open login page', function() {
    browser.waitForAngularEnabled(false);
    Steps.openPage(URL);
    expect(browser.getTitle()).toEqual(EXPECT_BROWSER_TITLE);
  });

  it('should input credentials and login', function() {
    LoginPage.enterLogin(LOGIN);
    LoginPage.clickLoginNext();
    LoginPage.enterPassword(PASSWORD);
    LoginPage.clickPasswordNext();
    InboxPage.loggedToInboxSuccesful();
  });

  it('should send mail to itself', function() {
    InboxPage.clickComposeButton();
    MailPage.enterDataTo(MAIL_SEND_TO);
    MailPage.enterDataSubject(MAIL_SUBJECT);
    MailPage.enterMessage(MAIL_MESSAGE);
    MailPage.clickSendButton();
    InboxPage.checkingVisibilityMailInbox(MAIL_MESSAGE);
  });
});
