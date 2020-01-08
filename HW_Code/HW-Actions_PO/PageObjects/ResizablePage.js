import AbstractPage from './AbstractPage';
import { element, $, browser } from 'protractor';
import { textIsPresentinElement } from '../Helpers/waiters';

class ResizablePage extends AbstractPage {
  constructor() {
    super();
  }

  get pageElement() {
    return $('h1');
  }

  get resizableFrameLocator() {
    return $('iframe.demo-frame');
  }

  get resizableElement() {
    return $('#resizable');
  }

  get resizableElementAxisXY() {
    return $('#resizable div:nth-child(4)');
  }
  switchFrameToResizable() {
    this.switchToFrame(this.resizableFrameLocator);
  }

  resizablePageTextIsPresent() {
    return textIsPresentinElement(this.pageElement, 'Resizable');
  }

  resizeElement(x, y) {
    browser
      .actions()
      .mouseDown(this.resizableElementAxisXY)
      .mouseMove({ x: x, y: y })
      .mouseUp()
      .perform();
  }

  toPageFrame() {
    this.switchToPageFrame();
  }

  getCoordinatesOfElement() {
    let regExp = /(left: 250px; top: 300px;)/;
    return this.getAttributeParameter(this.resizableElement, 'style', regExp);
  }
}

export default new ResizablePage();
