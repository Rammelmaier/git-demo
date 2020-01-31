import { waitForVisibleElement } from '../../helpers/waiters';
import AbstractPage from './AbstractPage';

class MailPage extends AbstractPage {
  constructor() {
    super();
  }

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

  async enterDataTo(enterRecipient) {
    await this.sendTo.sendKeys(enterRecipient);
  }

  async enterDataSubject(enterSubject) {
    await this.subjectBox.sendKeys(enterSubject);
  }

  async enterMessage(message) {
    await this.mailBody.sendKeys(message);
  }

  async clickSendButton() {
    await this.sendButton.click();
  }
}
export default new MailPage();
