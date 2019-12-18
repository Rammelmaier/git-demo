import { waitForVisibleElement } from '../../helpers/waiters';
// import { INCOME_MAIL, MAIL_CONTAIN, MAIL_MESSAGE } from '../../tests/HW3/mailTest';

class InboxPage {
  constructor() {}

  get inboxItem() {
    return $('a[title="Inbox"]');
  }

  get composeButton() {
    return element(by.xpath('//div[contains(text(), "Compose")]'));
  }

  get incomeMail() {
    return text => element(by.xpath(`//span[contains(text(), "${text}")]`));
  }

  loggedToInboxSuccesful() {
    waitForVisibleElement(this.inboxItem, 'Inbox element');
    // waitForVisibleElement(this.inboxItem, 7000, 'Inbox element');
    expect(this.inboxItem.isPresent()).toBeTruthy();
  }

  clickComposeButton() {
    this.composeButton.click();
  }

  checkingVisibilityMailInbox(text) {
    waitForVisibleElement(this.incomeMail(text), 'Inbox message');
    // waitForVisibleElement(this.incomeMail(text), 5000, 'Inbox message');
    expect(this.incomeMail(text).isPresent()).toBeTruthy();
    // console.log(`Keyword is: ${MAIL_MESSAGE}.`);
    // console.log(`Message Keyword is: ${MAIL_CONTAIN}`);
  }

  checkingMailText(text) {
    const mailText = this.incomeMail(text).getText().then(txt => txt.match(/\d+/)[0]);
    expect(mailText).toEqual(text)
  }
}
export default new InboxPage();
