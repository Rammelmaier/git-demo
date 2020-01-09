import ChekboxradioPage from '../PageObjects/ChekboxradioPage';
import { browser } from 'protractor';

class ChekboxradioPageSteps {
  constructor() {}

  performCheckboxSelectAction() {
    ChekboxradioPage.switchFrameToChekboxradio();
    ChekboxradioPage.selectLocation();
    ChekboxradioPage.selectHotel();
    ChekboxradioPage.selectBed();
    browser.sleep(2000);
  }
}

export default new ChekboxradioPageSteps();
