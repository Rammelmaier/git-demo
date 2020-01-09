import SelectmenuPage from '../PageObjects/SelectmenuPage';
import { browser } from 'protractor';

class SelectmenuPageSteps {
  constructor() {}

  performSelectmenuSelectAction() {
    SelectmenuPage.switchFrameToSelectmenu();
    SelectmenuPage.selectSpeed();
    browser.sleep(1000);
    SelectmenuPage.selectNumber();
    browser.sleep(1000);
    SelectmenuPage.selectTitle();
    browser.sleep(1000);
  }
}

export default new SelectmenuPageSteps();
