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
    return $('iframe[class="demo-frame"]');
  }

  get resizableElementAxisY() {
    return $('div[class="ui-resizable-handle ui-resizable-e"]');
  }

  get resizableElementAxisX() {
    return $('div[class="ui-resizable-handle ui-resizable-s"]');
  }

  get resizableElementAxisXY() {
    return $('div[class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"]');
  }
  switchFrameToResizable() {
    this.switchToFrame(this.resizableFrameLocator);
  }

  resizablePageTextIsPresent() {
    return textIsPresentinElement(this.pageElement, 'Resizable');
  }

  moveElementAxisX() {
    browser.actions().
    mouseDown(this.resizableElementAxisX).
    mouseMove({x:100, y:0}).mouseUp().
    perform();
  }

  moveElementAxisY() {
    browser.actions().
    mouseDown(this.resizableElementAxisY).
    mouseMove({x:0, y:100}).mouseUp().
    perform();
  }

  moveElementAxisXY() {
    browser.actions().
    mouseDown(this.resizableElementAxisXY).
    mouseMove({x:75, y:75}).mouseUp().
    perform();
  }

  toMainFrame() {
    this.switchToParentFrame();
  }
}

export default new ResizablePage();
