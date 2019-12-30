import AbstractPage from './AbstractPage';
import { $, element } from 'protractor';
import { textIsPresentinElement } from '../Helpers/waiters';

class ChekboxradioPage extends AbstractPage {
  constructor() {
    super();
  }

  get pageElement() {
    return $('h1');
  }

  get chekboxradioFrameLocator() {
    return $('iframe[class="demo-frame"]');
  }

  // get locationRadioButton() {
  //   return element(by.xpath('//*[@id="selectable"]/li[3]'));
  // }

  get locationRadioButton() {
    return $('label[for="radio-2"]');
  }

  get hotelRatingChecbox() {
    return $('label[for="checkbox-3"]');
  }

  get bedTypeCheckbox() {
    return $('label[for="checkbox-nested-1"]');
  }

  checkboxradioPageTextIsPresent() {
    return textIsPresentinElement(this.pageElement, 'Checkboxradio');
  }

  switchFrameToChekboxradio() {
    this.switchToFrame(this.chekboxradioFrameLocator);
  }

  selectElement(value) {
    browser
      .actions()
      .mouseDown(value)
      .mouseUp()
      .perform();
  }

  selectLocation() {
    this.selectElement(this.locationRadioButton);
  }

  selectHotel() {
    this.selectElement(this.hotelRatingChecbox);
  }

  selectBed() {
    this.selectElement(this.bedTypeCheckbox);
  }

  toPageFrame() {
    this.switchToPageFrame();
  }
}

export default new ChekboxradioPage();
