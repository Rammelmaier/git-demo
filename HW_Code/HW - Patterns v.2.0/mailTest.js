import PageFactory from './pageObjects/PageFactory';

const URL = 'https://gmail.com';
const EXPECT_BROWSER_TITLE = 'Gmail';

const CREDENTIALS = {
  LOGIN: 'nalex7415@gmail.com',
  PASSWORD: '12wasder56',
};

const MAIL = {
  SEND_TO: 'nalex7415@gmail.com',
  SUBJECT: 'test-letter',
  MESSAGE: Math.floor(Math.random() * 100000).toString(),
};

const USE = {
  STEPS: PageFactory.getPage('Steps'),
  LOGIN_PAGE: PageFactory.getPage('LoginPage'),
  INBOX_PAGE: PageFactory.getPage('InboxPage'),
  MAIL_PAGE: PageFactory.getPage('MailPage'),
};

describe('Test send mail with Protractor', function() {
  it('chrome should open login page', function() {
    browser.waitForAngularEnabled(false);
    USE.STEPS.openPage(URL);
    expect(browser.getTitle()).toEqual(EXPECT_BROWSER_TITLE);
  });

  it('should input credentials and login', function() {
    USE.LOGIN_PAGE.enterLogin(CREDENTIALS.LOGIN);
    USE.LOGIN_PAGE.clickLoginNext();
    USE.LOGIN_PAGE.enterPassword(CREDENTIALS.PASSWORD);
    USE.LOGIN_PAGE.clickPasswordNext();
    USE.INBOX_PAGE.loggedToInboxSuccesful();
  });

  it('should send mail to itself', function() {
    USE.INBOX_PAGE.clickComposeButton();
    USE.MAIL_PAGE.enterDataTo(MAIL.SEND_TO);
    USE.MAIL_PAGE.enterDataSubject(MAIL.SUBJECT);
    USE.MAIL_PAGE.enterMessage(MAIL.MESSAGE);
    USE.MAIL_PAGE.clickSendButton();
    USE.INBOX_PAGE.checkingVisibilityMailInbox(MAIL.MESSAGE);
  });
});
