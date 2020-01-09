import MainPage from './MainPage';
import DraggablePage from './DraggablePage';
import DroppablePage from './DroppablePage';
import ResizablePage from './ResizablePage';
import SelectablePage from './SelectablePage';
import CheckboxradioPage from './ChekboxradioPage';
import SelectmenuPage from './SelectmenuPage';

class PageFactory {
  getPage(type) {
    switch (type) {
      case 'MainPage':
        return MainPage;
      case 'DraggablePage':
        return DraggablePage;
      case 'DroppablePage':
        return DroppablePage;
      case 'ResizablePage':
        return ResizablePage;
      case 'SelectablePage':
        return SelectablePage;
      case 'CheckboxradioPage':
        return CheckboxradioPage;
      case 'SelectmenuPage':
        return SelectmenuPage;
      default: {
        throw new Error(`The page with title ${type} doesn't exist!`);
      }
    }
  }
}

const PAGEFACTORY = new PageFactory();

const USE = {
  MAIN_PAGE: PAGEFACTORY.getPage('MainPage'),
  DRAGGABLE_PAGE: PAGEFACTORY.getPage('DraggablePage'),
  DROPPABLE_PAGE: PAGEFACTORY.getPage('DroppablePage'),
  RESIZABLE_PAGE: PAGEFACTORY.getPage('ResizablePage'),
  SELECTABLE_PAGE: PAGEFACTORY.getPage('SelectablePage'),
  CHECKBOXRADIO_PAGE: PAGEFACTORY.getPage('CheckboxradioPage'),
  SELECTMENU_PAGE: PAGEFACTORY.getPage('SelectmenuPage'),
};

export { USE };
