import { waitForVisibleElement } from '../../helpers/waiters';

class MailPage {
  constructor() {}

  get sendTo() {
    return element(by.name('to'));
  }

  get subjectBox() {
    return $('input[name="subjectbox"]');
  }

  get mailBody() {
    return $(`div[aria-label='Message Body']`);
  }

  get sendButton() {
    return $('div[aria-label="Send ‪(Ctrl-Enter)‬"]');
  }

  enterDataTo(enterRecipient) {
    this.sendTo.sendKeys(enterRecipient);
  }

  enterDataSubject(enterSubject) {
    this.subjectBox.sendKeys(enterSubject);
  }

  enterMessage(message) {
    this.mailBody.sendKeys(message);
  }

  clickSendButton() {
    this.sendButton.click();
  }
}
export default new MailPage();
