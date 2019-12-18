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

  // clickToField() {
  //   this.sendTo.click();
  // }

  enterDataTo(mailto) {
    this.sendTo.sendKeys(mailto);
  }

  // clickSubjectField() {
  //   this.subjectBox.click();
  // }

  enterDataSubject(subject) {
    this.subjectBox.sendKeys(subject);
  }

  // clickMessageField() {
  //   this.mailBody.click();
  // }

  // messageGenerator() {
  //   const keyCheck = Math.floor(Math.random() * 100000).toString();
  //   return keyCheck;
  // }

  enterMessage(message) {
    this.mailBody.sendKeys(message);
  }

  clickSendButton() {
    this.sendButton.click();
  }
}
export default new MailPage();
