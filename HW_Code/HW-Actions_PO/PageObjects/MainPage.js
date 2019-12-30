import AbstractPage from './AbstractPage';
import { browser } from 'protractor';

class MainPage extends AbstractPage {
  constructor() {
    super();
  }

  get draggablePageButton() {
    return $('a[href="https://jqueryui.com/draggable/"]');
  }

  get droppablePageButton() {
    return $('a[href="https://jqueryui.com/droppable/"]');
  }

  get resizablePageButton() {
    return $('a[href="https://jqueryui.com/resizable/"]');
  }

  get selectablePageButton() {
    return $('a[href="https://jqueryui.com/selectable/"]');
  }

  get checkboxradioPageButton() {
    return $('a[href="https://jqueryui.com/checkboxradio/"]');
  }

  get selectmenuPageButton() {
    return $('a[href="https://jqueryui.com/selectmenu/"]');
  }

  openMainPage(url) {
    this.openPage(url);
  }

  openDraggablePage() {
    this.draggablePageButton.click();
  }

  openDroppablePage() {
    this.droppablePageButton.click();
  }

  openResizablePage() {
    this.resizablePageButton.click();
  }

  openSelectablePage() {
    this.selectablePageButton.click();
  }

  openCheckboxradioPage() {
    this.checkboxradioPageButton.click();
  }

  openSelectmenuPage() {
    this.selectmenuPageButton.click();
  }
}

export default new MainPage();
