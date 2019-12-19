import { waitForVisibleElement } from '../../helpers/waiters';

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
    expect(this.inboxItem.isPresent()).toBeTruthy();
  }

  clickComposeButton() {
    this.composeButton.click();
  }

  checkingVisibilityMailInbox(text) {
    waitForVisibleElement(this.incomeMail(text), 'Inbox message');
    expect(this.incomeMail(text).isPresent()).toBeTruthy();
  }

  checkingMailText(text) {
    const mailText = this.incomeMail(text).getText().then(txt => txt.match(/\d+/)[0]);
    expect(mailText).toEqual(text);
  }
}
export default new InboxPage();
