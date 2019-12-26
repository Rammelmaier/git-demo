import { EXPECTED, PARAMETERS } from './sources';
import MainPage from './PageObjects/MainPage';
import MainPageSteps from './Steps/MainPageSteps';
import DraggablePage from './PageObjects/DraggablePage';
import DraggablePageSteps from './Steps/DraggablePageSteps';
import DroppablePage from './PageObjects/DroppablePage';
import DroppablePageSteps from './Steps/DroppablePageSteps';
import ResizablePage from './PageObjects/ResizablePage';
import ResizablePageSteps from './Steps/ResizablePageSteps';

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
    expect(DraggablePage.getCoordinatesOfElement()).toEqual(PARAMETERS.DRAGGABLE_COORDS);
    DraggablePage.toMainFrame();
  });

  it('3rd step performing droppable task', function() {
    MainPageSteps.openDroppablePage();
    expect(DroppablePage.droppablePageTextIsPresent()).toBeTruthy();
    DroppablePageSteps.performDroppableAction();
    browser.sleep(1000);
    expect(DroppablePage.afterTestTextisPresent()).toBeTruthy();
    DroppablePage.toMainFrame();
  });

  it('4rd step performing resizable task', function() {
    MainPageSteps.openResizablePage();
    expect(ResizablePage.resizablePageTextIsPresent()).toBeTruthy();
    ResizablePageSteps.performResizableSteps();
    browser.sleep(1000);
    ResizablePage.toMainFrame();
  });
});
