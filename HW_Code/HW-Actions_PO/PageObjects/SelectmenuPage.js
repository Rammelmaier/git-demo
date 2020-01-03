import AbstractPage from './AbstractPage';
import { $, element } from 'protractor';
import { textIsPresentinElement } from '../Helpers/waiters';

class SelectmenuPage extends AbstractPage {
  constructor() {
    super();
  }

  get pageElement() {
    return $('h1');
  }

  get SelectmenuFrameLocator() {
    return $('iframe[class="demo-frame"]');
  }

  get speedSelectmenu() {
    return $('#speed-button');
  }

  // get speedSlowItem() {
  //   return $('#ui-id-2');
  // }

  get numberSelectmenu() {
    return $('#number-button');
  }

  // get number6Item() {
  //   return $('#ui-id-11');
  // }

  get titleSelectmenu() {
    return $('#salutation-button');
  }

  // get titleMrItem() {
  //   return $('#ui-id-26');
  // }

  selectmenuPageTextIsPresent() {
    return textIsPresentinElement(this.pageElement, 'Selectmenu');
  }

  switchFrameToSelectmenu() {
    this.switchToFrame(this.SelectmenuFrameLocator);
  }

  selectElement(selectmenu, X, Y) {
    browser
      .actions()
      .click(selectmenu)
      .mouseMove({ x: X, y: Y })
      .mouseDown()
      //.mouseMove(item)
      .mouseUp()
      //.mouseDown(item)
      .perform();
  }

  selectSpeed() {
    this.selectElement(this.speedSelectmenu, 0, 55);
  }

  selectNumber() {
    this.selectElement(this.numberSelectmenu, 0, 150);
  }

  selectTitle() {
    this.selectElement(this.titleSelectmenu, 0, 55);
  }

  toPageFrame() {
    this.switchToPageFrame();
  }
}

export default new SelectmenuPage();
