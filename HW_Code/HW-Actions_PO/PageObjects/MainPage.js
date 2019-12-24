import AbstractPage from './AbstractPage';
import { browser } from 'protractor';
// import { draggableFrameLocator } from './DraggablePage';
class MainPage extends AbstractPage {
  constructor() {
    super();
  }

  openMainPage(url) {
    this.openPage(url);
  }

  openDraggablePage(url) {
    this.openPage(url);
  }

  openDroppablePage(url) {
    this.openPage(url);
  }
}

export default new MainPage();
