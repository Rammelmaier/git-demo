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
}

export default new MainPage();
