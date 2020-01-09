import AbstractPage from './AbstractPage';
import { $, element } from 'protractor';
import { textIsPresentinElement } from '../Helpers/waiters';

class SelectablePage extends AbstractPage {
  constructor() {
    super();
  }

  get pageElement() {
    return $('h1');
  }

  get selectableFrameLocator() {
    return $('iframe.demo-frame');
  }

  get selectableElement() {
    return $('#selectable li:nth-child(3)');
  }

  selectablePageTextIsPresent() {
    return textIsPresentinElement(this.pageElement, 'Selectable');
  }

  switchFrameToSelectable() {
    this.switchToFrame(this.selectableFrameLocator);
  }

  selectElement() {
    browser
      .actions()
      .mouseDown(this.selectableElement)
      .mouseUp()
      .perform();
  }

  afterTestAttributeChanged() {
    let regExp = /(ui-selected)/;
    return this.getAttributeParameter(this.selectableElement, 'class', regExp);
  }

  toPageFrame() {
    this.switchToPageFrame();
  }
}

export default new SelectablePage();
