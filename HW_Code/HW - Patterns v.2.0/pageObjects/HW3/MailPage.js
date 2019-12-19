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

  enterDataTo(mailto) {
    this.sendTo.sendKeys(mailto);
  }

  enterDataSubject(subject) {
    this.subjectBox.sendKeys(subject);
  }

  enterMessage(message) {
    this.mailBody.sendKeys(message);
  }

  clickSendButton() {
    this.sendButton.click();
  }
}
export default new MailPage();
