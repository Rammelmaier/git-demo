import { EXPECTED, ACTION_PARAMETERS } from './sources';
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
    MainPageSteps.openMainPage();
    expect(MainPage.getTitle()).toEqual(EXPECTED.MAIN_BROWSER_TITLE);
  });

  it('2nd step performing draggable task', function() {
    MainPageSteps.openDraggablePage();
    expect(DraggablePage.getTitle()).toEqual(EXPECTED.DRAGGABLE_BROWSER_TITLE);
    DraggablePageSteps.performDraggableAction();
    //doesnt work properly(?)
    expect(DraggablePage.getCoordinatesOfElement()).toEqual(draggableFinalCoords);
    DraggablePage.toPageFrame();
  });

  it('3rd step performing droppable task', function() {
    MainPageSteps.openDroppablePage();
    expect(DroppablePage.droppablePageTextIsPresent()).toBeTruthy();
    DroppablePageSteps.performDroppableAction();
    browser.sleep(1000);
    expect(DroppablePage.afterTestTextisPresent()).toBeTruthy();
    DroppablePage.toPageFrame();
  });

  it('4rd step performing resizable task', function() {
    MainPageSteps.openResizablePage();
    expect(ResizablePage.resizablePageTextIsPresent()).toBeTruthy();
    ResizablePageSteps.performResizableSteps();
    browser.sleep(1000);
    //expect(ResizablePage.getCoordinatesOfElement()).toEqual(resizableFinalCoords());
    ResizablePage.toPageFrame();
  });

  it('5th step performing selectable task', function() {
    MainPageSteps.openSelectablePage();
    expect(SelectablePage.selectablePageTextIsPresent()).toBeTruthy();
    SelectablePageSteps.performSelectableAction();
    expect(SelectablePage.afterTestAttributeChanged()).toEqual(EXPECTED.UI_SELECTED);
    SelectablePage.toPageFrame();
  });

  it('6th step performing checkbox task', function() {
    MainPageSteps.openCheckboxradioPage();
    expect(CheckboxradioPage.checkboxradioPageTextIsPresent()).toBeTruthy();
    CheckboxradioPageSteps.performCheckboxSelectAction();
    expect(CheckboxradioPage.allElementsActive()).toEqual('true');
    CheckboxradioPage.toPageFrame();
  });

  it('7th step performing selectmenu task', function() {
    MainPageSteps.openSelectmenuPage();
    expect(SelectmenuPage.selectmenuPageTextIsPresent).toBeTruthy();
    SelectmenuPageSteps.performSelectmenuSelectAction();
    //expect().toBeTruthy();
    SelectmenuPage.toPageFrame();
  });
});
