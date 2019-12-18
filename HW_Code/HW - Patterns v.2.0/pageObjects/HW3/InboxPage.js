import { waitForVisibleElement } from '../../helpers/waiters';
import { INCOME_MAIL, MAIL_CONTAIN, MAIL_MESSAGE } from '../../tests/HW3/mailTest';

class InboxPage {
  constructor() {}

  get inboxItem() {
    return $('a[title="Inbox"]');
  }

  get composeButton() {
    return element(by.xpath('//div[contains(text(), "Compose")]'));
  }

  loggedToInboxSuccesful() {
    waitForVisibleElement(this.inboxItem, 7000, 'Inbox element');
    expect(this.inboxItem.isPresent()).toBeTruthy();
  }

  clickComposeButton() {
    this.composeButton.click();
  }

  checkingVisibilityMailInbox() {
    waitForVisibleElement(INCOME_MAIL, 5000, 'Inbox message');
    //expect(INCOME_MAIL.isPresent()).toBeTruthy();
    console.log(`Keyword is: ${MAIL_MESSAGE}.`);
    console.log(`Message Keyword is: ${MAIL_CONTAIN}`);
  }
}
export default new InboxPage();
