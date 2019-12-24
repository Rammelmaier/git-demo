import AbstractPage from './AbstractPage';
import { element, $, browser } from 'protractor';

class DraggablePage extends AbstractPage {
  constructor() {
    super();
  }

  get draggableFrameLocator() {
    return element(by.css('iframe[class="demo-frame"]'));
  }

  get draggableElement() {
    return $('div[id="draggable"]');
  }

  switchFrameToDraggable() {
    this.switchToFrame(this.draggableFrameLocator);
  }

  moveElement() {
    browser.actions().
    mouseDown(this.draggableElement).
    mouseMove({x:120, y:120}).
    mouseUp().
    perform();
  }

  getCoordinatesOfElement() {
    let regExpRule = /(left: 120px; top: 120px)/;
    this.getAtributeParameter(this.draggableElement, 'style', regExpRule);
  }
}

export default new DraggablePage();
