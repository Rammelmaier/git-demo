import ResizablePage from '../PageObjects/ResizablePage';
import { browser } from 'protractor';

class ResizablePageSteps {
  constructor() {}

  performResizableSteps() {
    ResizablePage.switchFrameToResizable();
    ResizablePage.moveElementAxisX();
    browser.sleep(1000);
    ResizablePage.moveElementAxisY();
    browser.sleep(1000);
    ResizablePage.moveElementAxisXY();
    browser.sleep(1000);
  }
}

export default new ResizablePageSteps();
