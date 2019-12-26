import MainPage from '../PageObjects/MainPage';
import { PAGES } from '../sources';

class MainPageSteps {
  constructor() {}

  openMainPage() {
    MainPage.openMainPage(PAGES.MAIN_PAGE_URL);
  }

  openDraggablePage() {
    MainPage.openDraggablePage();
  }

  openDroppablePage() {
    MainPage.openDroppablePage();
  }

  openResizablePage() {
    MainPage.openResizablePage();
  }
}

export default new MainPageSteps();
