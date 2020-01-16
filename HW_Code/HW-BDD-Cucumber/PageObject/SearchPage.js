import AbstractPage from './AbstractPage';
import { $ } from 'protractor';

class SearchPage extends AbstractPage {
  constructor() {
    super();
  }

  get firstResult() {
    return $('#srp-river-results-listing1 h3:nth-child(2)');
  }

  async openFirstSearchResultPage() {
    await this.firstResult.click();
  }
}

export default new SearchPage();
