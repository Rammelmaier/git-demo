import { waitForVisibleElement } from '../../helpers/waiters';

class MailPage {
  constructor() {}

  get sendTo() {
    return element(by.name('to'));
  }

  get subjectBox() {
    return element(by.css('input[name="subjectbox"]'));
  }

  get mailBody() {
    return element(by.css(`div[aria-label='Message Body']`));
  }

  get sendButton() {
    return element(by.css('div[aria-label="Send ‪(Ctrl-Enter)‬"]'));
  }

  enterDataTo(enterRecipient) {
    this.sendTo.sendKeyse(enterRecipient);
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
