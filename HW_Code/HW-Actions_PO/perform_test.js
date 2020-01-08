import { EXPECTED, ACTION_PARAMETERS } from './sources';
// import { USE } from './page-factory';
import PageFactory from './page-factory';

// import MainPage from './PageObjects/MainPage';
// import MainPageSteps from './Steps/MainPageSteps';
// import DraggablePage from './PageObjects/DraggablePage';
// import DraggablePageSteps from './Steps/DraggablePageSteps';
// import DroppablePage from './PageObjects/DroppablePage';
// import DroppablePageSteps from './Steps/DroppablePageSteps';
// import ResizablePage from './PageObjects/ResizablePage';
// import ResizablePageSteps from './Steps/ResizablePageSteps';
// import SelectablePage from './PageObjects/SelectablePage';
// import SelectablePageSteps from './Steps/SelectablePageSteps';
// import CheckboxradioPage from './PageObjects/ChekboxradioPage';
// import CheckboxradioPageSteps from './Steps/CheckboxradioPageSteps';
// import SelectmenuPage from './PageObjects/SelectmenuPage';
// import SelectmenuPageSteps from './Steps/SelectmenuPageSteps';

const USE = {
  MAIN_PAGE: PageFactory.getPage('MainPage'),
  MAIN_PAGE_STEPS: PageFactory.getPage('MainPageSteps'),
  DRAGGABLE_PAGE: PageFactory.getPage('DraggablePage'),
  DRAGGABLE_PAGE_STEPS: PageFactory.getPage('DraggablePageSteps'),
  DROPPABLE_PAGE: PageFactory.getPage('DroppablePage'),
  DROPPABLE_PAGE_STEPS: PageFactory.getPage('DroppablePageSteps'),
  RESIZABLE_PAGE: PageFactory.getPage('ResizablePage'),
  RESIZABLE_PAGE_STEPS: PageFactory.getPage('ResizablePageSteps'),
  SELECTABLE_PAGE: PageFactory.getPage('SelectablePage'),
  SELECTABLE_PAGE_STEPS: PageFactory.getPage('SelectablePageSteps'),
  CHECKBOXRADIO_PAGE: PageFactory.getPage('CheckboxradioPage'),
  CHECKBOXRADIO_PAGE_STEPS: PageFactory.getPage('CheckboxradioPageSteps'),
  SELECTMENU_PAGE: PageFactory.getPage('SelectmenuPage'),
  SELECTMENU_PAGE_STEPS: PageFactory.getPage('SelectmenuPageSteps'),
};

let draggableFinalCoords = `left: ${ACTION_PARAMETERS.DRAGGABLE_COORDS_X}px; top: ${ACTION_PARAMETERS.DRAGGABLE_COORDS_X}px;`;

let resizableFinalCoords = () => {
  let x1 = ACTION_PARAMETERS.RESIZABLE_COORDS_1_X;
  let y1 = ACTION_PARAMETERS.RESIZABLE_COORDS_1_Y;
  let x2 = ACTION_PARAMETERS.RESIZABLE_COORDS_2_X;
  let y2 = ACTION_PARAMETERS.RESIZABLE_COORDS_2_Y;
  let x3 = ACTION_PARAMETERS.RESIZABLE_COORDS_3_X;
  let y3 = ACTION_PARAMETERS.RESIZABLE_COORDS_3_Y;
  let finalX = x1 + x2 + x3;
  let finalY = y1 + y2 + y3;
  return `left: ${finalX}px; top: ${finalY}px;`;
};

describe('Testing all actions : ', function() {
  it('1st step - Open main site page', function() {
    browser.waitForAngularEnabled(false);
    USE.MAIN_PAGE_STEPS.openMainPage();
    expect(USE.MAIN_PAGE.getTitle()).toEqual(EXPECTED.MAIN_BROWSER_TITLE);
  });

  it('2nd step performing draggable task', function() {
    USE.MAIN_PAGE_STEPS.openDraggablePage();
    expect(USE.DRAGGABLE_PAGE.getTitle()).toEqual(EXPECTED.DRAGGABLE_BROWSER_TITLE);
    USE.DRAGGABLE_PAGE_STEPS.performDraggableAction();
    //doesnt work properly(?)
    expect(USE.DRAGGABLE_PAGE.getCoordinatesOfElement()).toEqual(draggableFinalCoords);
    USE.DRAGGABLE_PAGE.toPageFrame();
  });

  it('3rd step performing droppable task', function() {
    USE.MAIN_PAGE_STEPS.openDroppablePage();
    expect(USE.DROPPABLE_PAGE.droppablePageTextIsPresent()).toBeTruthy();
    USE.DROPPABLE_PAGE_STEPS.performDroppableAction();
    browser.sleep(1000);
    expect(USE.DROPPABLE_PAGE.afterTestTextisPresent()).toBeTruthy();
    USE.DROPPABLE_PAGE.toPageFrame();
  });

  it('4rd step performing resizable task', function() {
    USE.MAIN_PAGE_STEPS.openResizablePage();
    expect(USE.RESIZABLE_PAGE.resizablePageTextIsPresent()).toBeTruthy();
    USE.RESIZABLE_PAGE_STEPS.performResizableSteps();
    browser.sleep(1000);
    //expect(USE.RESIZABLE_PAGE.getCoordinatesOfElement()).toEqual(resizableFinalCoords());
    USE.RESIZABLE_PAGE.toPageFrame();
  });

  it('5th step performing selectable task', function() {
    USE.MAIN_PAGE_STEPS.openSelectablePage();
    expect(USE.SELECTABLE_PAGE.selectablePageTextIsPresent()).toBeTruthy();
    USE.SELECTABLE_PAGE_STEPS.performSelectableAction();
    expect(USE.SELECTABLE_PAGE.afterTestAttributeChanged()).toEqual(EXPECTED.UI_SELECTED);
    USE.SELECTABLE_PAGE.toPageFrame();
  });

  it('6th step performing checkbox task', function() {
    USE.MAIN_PAGE_STEPS.openCheckboxradioPage();
    expect(USE.CHECKBOXRADIO_PAGE.checkboxradioPageTextIsPresent()).toBeTruthy();
    USE.CHECKBOXRADIO_PAGE_STEPS.performCheckboxSelectAction();
    //expect(USE.CHECKBOXRADIO_PAGE.allElementsActive()).toEqual('true');
    USE.CHECKBOXRADIO_PAGE.toPageFrame();
  });

  it('7th step performing selectmenu task', function() {
    USE.MAIN_PAGE_STEPS.openSelectmenuPage();
    expect(USE.SELECTMENU_PAGE.selectmenuPageTextIsPresent).toBeTruthy();
    USE.SELECTMENU_PAGE_STEPS.performSelectmenuSelectAction();
    //expect().toBeTruthy();
    USE.SELECTMENU_PAGE.toPageFrame();
  });
});
