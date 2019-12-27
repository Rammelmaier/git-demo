import ResizablePage from '../PageObjects/ResizablePage';
import { browser } from 'protractor';
import { ACTION_PARAMETERS } from '../sources';

let x1 = ACTION_PARAMETERS.RESIZABLE_COORDS_1_X;
let y1 = ACTION_PARAMETERS.RESIZABLE_COORDS_1_Y;
let x2 = ACTION_PARAMETERS.RESIZABLE_COORDS_2_X;
let y2 = ACTION_PARAMETERS.RESIZABLE_COORDS_2_Y;
let x3 = ACTION_PARAMETERS.RESIZABLE_COORDS_3_X;
let y3 = ACTION_PARAMETERS.RESIZABLE_COORDS_3_Y;

class ResizablePageSteps {
  constructor() {}

  performResizableSteps() {
    ResizablePage.switchFrameToResizable();
    ResizablePage.resizeElement(x1, y1);
    browser.sleep(1000);
    ResizablePage.resizeElement(x2, y2);
    browser.sleep(1000);
    ResizablePage.resizeElement(x3, y3);
    browser.sleep(1000);
  }
}

export default new ResizablePageSteps();
