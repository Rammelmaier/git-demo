import MainPage from '../PageObjects/MainPage';
import { PAGES, EXPECTED } from '../sources';
import DraggablePage from '../PageObjects/DraggablePage';
//import { MAIN_PAGE_URL, DRAGGABLE_PAGE_URL } from '../sources';

class MainPageSteps {
  constructor() {}

  openMainPage() {
    MainPage.openMainPage(PAGES.MAIN_PAGE_URL);
    //MainPage.openChildPage(PAGES.DRAGGABLE_PAGE_URL);
  }

  openDraggablePage() {
    MainPage.openDraggablePage(PAGES.DRAGGABLE_PAGE_URL);
  }
}

export default new MainPageSteps();
