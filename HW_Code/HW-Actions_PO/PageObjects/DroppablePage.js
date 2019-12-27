import AbstractPage from './AbstractPage';
import { $, element } from 'protractor';
import { textIsPresentinElement } from '../Helpers/waiters';

class DroppablePage extends AbstractPage {
  constructor() {
    super();
  }

  get pageElement() {
    return $('h1');
  }

  get droppableFrameLocator() {
    return $('iframe[class="demo-frame"]');
  }

  get draggableElement() {
    return $('div[id="draggable"]');
  }

  get droppableElement() {
    return $('div[id="droppable"]');
  }

  get droppableLabelElement() {
    return element(by.xpath('//*[@id="droppable"]/p'));
  }

  droppablePageTextIsPresent() {
    return textIsPresentinElement(this.pageElement, 'Droppable');
  }

  afterTestTextisPresent() {
    return textIsPresentinElement(this.droppableLabelElement, 'Dropped!'); // condition doesnt work. test is passed sucessfully anyway
  }

  switchFrameToDroppable() {
    this.switchToFrame(this.droppableFrameLocator);
  }

  moveElement() {
    browser.actions()
      .mouseDown(this.draggableElement)
      .mouseMove(this.droppableElement)
      .mouseUp()
      .perform();
  }

  toPageFrame() {
    this.switchToPageFrame();
  }
}

export default new DroppablePage();
