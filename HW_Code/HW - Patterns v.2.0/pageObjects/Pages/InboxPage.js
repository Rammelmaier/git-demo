import { waitForVisibleElement } from '../../helpers/waiters';
import AbstractPage from './AbstractPage';

class InboxPage extends AbstractPage {
  constructor() {
    super();
  }

  get inboxItem() {
    return $('a[title="Inbox"]');
  }

  get composeButton() {
    return element(by.xpath('//div[contains(text(), "Compose")]'));
  }

  get incomeMail() {
    return text => element(by.xpath(`//span[contains(text(), "${text}")]`));
  }

  async loggedToInboxSuccesful() {
    await waitForVisibleElement(this.inboxItem, 'Inbox element');
    await this.highlightElement(this.inboxItem);
    await expect(await this.inboxItem.isPresent()).toBeTruthy();
  }

  async clickComposeButton() {
    await this.highlightElement(this.composeButton);
    await this.composeButton.click();
  }

  async checkingVisibilityMailInbox(text) {
    await waitForVisibleElement(this.incomeMail(text), 'Inbox message');
    this.highlightElement(this.incomeMail(text));
    await expect(await this.incomeMail(text).isPresent()).toBeTruthy();
  }

  async checkingMailText(text) {
    const mailText = await this.incomeMail(text)
      .getText()
      .then(txt => txt.match(/\d+/)[0]);
    await expect(await mailText).toEqual(text);
  }
}
export default new InboxPage();
