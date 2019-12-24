import AbstractPage from './AbstractPage';
import { $, element } from 'protractor';

class DroppablePage extends AbstractPage {
  constructor() {
    super();
  }

  get pageElement() {
    return $('h1');
  }

  get droppableFrameLocator() {
    return $('iframe[src="/resources/demos/droppable/default.html"]');
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

  textIsPresent() {
    let EC = protractor.ExpectedConditions;
    return browser.wait(EC.textToBePresentInElement(this.pageElement, 'Droppable'), 5000);
  }

  droppablePageTextIsPresent() {
    return this.textIsPresentinElement(this.pageElement, 'Droppable');
  }

  afterTestTextisPresent() {
    return this.textIsPresentinElement(this.droppableLabelElement, 'Dropped!'); // condition doesnt work. test is passed sucessfully anyway
  }

  switchFrameToDroppable() {
    this.switchToFrame(this.droppableFrameLocator);
  }

  moveElement() {
    browser.actions().
    mouseDown(this.draggableElement).
    mouseMove(this.droppableElement).
    mouseUp().
    perform();
  }
}

export default new DroppablePage();
