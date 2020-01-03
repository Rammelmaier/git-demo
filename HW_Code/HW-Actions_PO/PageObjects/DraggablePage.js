import AbstractPage from './AbstractPage';
import { element, $, browser } from 'protractor';
import { ACTION_PARAMETERS } from '../sources';

let X = ACTION_PARAMETERS.DRAGGABLE_COORDS_X;
let Y = ACTION_PARAMETERS.DRAGGABLE_COORDS_Y;

class DraggablePage extends AbstractPage {
  constructor() {
    super();
  }

  get draggableFrameLocator() {
    return $('iframe[class="demo-frame"]');
  }

  get draggableElement() {
    return $('div[id="draggable"]');
  }

  switchFrameToDraggable() {
    this.switchToFrame(this.draggableFrameLocator);
  }

  moveElement() {
    browser
      .actions()
      .mouseDown(this.draggableElement)
      .mouseMove({ x: X, y: Y })
      .mouseUp()
      .perform();
  }

  getCoordinatesOfElement() {
    let regExp = /(left: 120px; top: 120px;)/;
    return this.getAttributeParameter(this.draggableElement, 'style', regExp);
  }

  toPageFrame() {
    this.switchToPageFrame();
  }
}

export default new DraggablePage();
