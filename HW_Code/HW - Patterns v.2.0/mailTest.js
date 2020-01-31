import PageFactory from './pageObjects/PageFactory';

// LOGGER
const log4js = require('log4js');
log4js.configure({
  appenders: {
    logFile: { type: 'datefile', filename: '../../statistic/logs/main.log' },
    errorLog: { type: 'datefile', filename: '../../statistic/logs/error.log' },
    console: { type: 'console' },
  },

  categories: {
    default: { appenders: ['logFile', 'console'], level: 'info' },
    error: { appenders: ['errorLog'], level: 'error' },
  },
});

const logger = log4js.getLogger();

// LOGGER END

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

describe('Test send mail with Protractor', async function() {
  logger.info('Running test for sending mail with Protractor');

  it('chrome should open login page', async function() {
    logger.info('Chrome should open login page');
    await browser.waitForAngularEnabled(false);
    logger.info('Turning off AngularJS');
    await USE.STEPS.openPage(URL);
    logger.info('Protractor opens LogIn Page');
    await expect(await browser.getTitle()).toEqual(EXPECT_BROWSER_TITLE);
    let browserGetTitle = browser.getTitle();
    browserGetTitle.then(function(txt) {
      logger.info(`Browser Title toEqual: ${txt}`);
    });
  });

  it('should input credentials and login', async function() {
    await USE.LOGIN_PAGE.enterLogin(CREDENTIALS.LOGIN);
    await USE.LOGIN_PAGE.clickLoginNext();
    await USE.LOGIN_PAGE.enterPassword(CREDENTIALS.PASSWORD);
    await USE.LOGIN_PAGE.clickPasswordNext();
    await USE.INBOX_PAGE.loggedToInboxSuccesful();
  });

  it('should send mail to itself', async function() {
    await USE.INBOX_PAGE.clickComposeButton();
    await USE.MAIL_PAGE.enterDataTo(MAIL.SEND_TO);
    await USE.MAIL_PAGE.enterDataSubject(MAIL.SUBJECT);
    await USE.MAIL_PAGE.enterMessage(MAIL.MESSAGE);
    await USE.MAIL_PAGE.clickSendButton();
    await USE.INBOX_PAGE.checkingVisibilityMailInbox(MAIL.MESSAGE);
  });
});

// run it!
// $ npm run test -- --specs="HW_Code/HW - Patterns v.2.0/mailTest.js"
