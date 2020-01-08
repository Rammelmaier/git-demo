import MainPage from './PageObjects/MainPage';
import MainPageSteps from './Steps/MainPageSteps';
import DraggablePage from './PageObjects/DraggablePage';
import DraggablePageSteps from './Steps/DraggablePageSteps';
import DroppablePage from './PageObjects/DroppablePage';
import DroppablePageSteps from './Steps/DroppablePageSteps';
import ResizablePage from './PageObjects/ResizablePage';
import ResizablePageSteps from './Steps/ResizablePageSteps';
import SelectablePage from './PageObjects/SelectablePage';
import SelectablePageSteps from './Steps/SelectablePageSteps';
import CheckboxradioPage from './PageObjects/ChekboxradioPage';
import CheckboxradioPageSteps from './Steps/CheckboxradioPageSteps';
import SelectmenuPage from './PageObjects/SelectmenuPage';
import SelectmenuPageSteps from './Steps/SelectmenuPageSteps';

// const USE = {
//   MAIN_PAGE: PageFactory.getPage('MainPage'),
//   MAIN_PAGE_STEPS: PageFactory.getPage('MainPageSteps'),
//   DRAGGABLE_PAGE: PageFactory.getPage('DraggablePage'),
//   DRAGGABLE_PAGE_STEPS: PageFactory.getPage('DraggablePageSteps'),
//   DROPPABLE_PAGE: PageFactory.getPage('DroppablePage'),
//   DROPPABLE_PAGE_STEPS: PageFactory.getPage('DroppablePageSteps'),
//   RESIZABLE_PAGE: PageFactory.getPage('ResizablePage'),
//   RESIZABLE_PAGE_STEPS: PageFactory.getPage('ResizablePageSteps'),
//   SELECTABLE_PAGE: PageFactory.getPage('SelectablePage'),
//   SELECTABLE_PAGE_STEPS: PageFactory.getPage('SelectablePageSteps'),
//   CHECKBOXRADIO_PAGE: PageFactory.getPage('CheckboxradioPage'),
//   CHECKBOXRADIO_PAGE_STEPS: PageFactory.getPage('CheckboxradioPageSteps'),
//   SELECTMENU_PAGE: PageFactory.getPage('SelectmenuPage'),
//   SELECTMENU_PAGE_STEPS: PageFactory.getPage('SelectmenuPageSteps'),
// };

class PageFactory {
  getPage(type) {
    switch (type) {
      case 'MainPage':
        return MainPage;
      case 'MainPageSteps':
        return MainPageSteps;
      case 'DraggablePage':
        return DraggablePage;
      case 'DraggablePageSteps':
        return DraggablePageSteps;
      case 'DroppablePage':
        return DroppablePage;
      case 'DroppablePageSteps':
        return DroppablePageSteps;
      case 'ResizablePage':
        return ResizablePage;
      case 'ResizablePageSteps':
        return ResizablePageSteps;
      case 'SelectablePage':
        return SelectablePage;
      case 'SelectablePageSteps':
        return SelectablePageSteps;
      case 'CheckboxradioPage':
        return CheckboxradioPage;
      case 'CheckboxradioPageSteps':
        return CheckboxradioPageSteps;
      case 'SelectmenuPage':
        return SelectmenuPage;
      case 'SelectmenuPageSteps':
        return SelectmenuPageSteps;
      default: {
        throw new Error(`The page with title ${type} doesn't exist!`);
      }
    }
  }
}

export default new PageFactory();
// export { USE };
