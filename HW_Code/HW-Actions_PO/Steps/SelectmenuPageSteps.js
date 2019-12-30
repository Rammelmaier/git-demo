import SelectmenuPage from '../PageObjects/SelectmenuPage';
import { browser } from 'protractor';

class SelectmenuPageSteps {
  constructor() {}

  performSelectmenuSelectAction() {
    SelectmenuPage.switchFrameToSelectmenu();
    SelectmenuPage.selectSpeed();
    browser.sleep(2000);
    SelectmenuPage.selectNumber();
    browser.sleep(2000);
    SelectmenuPage.selectTitle();
    browser.sleep(2000);
  }
}

export default new SelectmenuPageSteps();
