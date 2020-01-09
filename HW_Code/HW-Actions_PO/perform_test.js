import { EXPECTED, ACTION_PARAMETERS } from './sources';
import { USE } from './PageObjects/page-factory';
import { USES } from './Steps/step-factory';

let draggableFinalCoords = `left: ${ACTION_PARAMETERS.DRAGGABLE_COORDS_X}px; top: ${ACTION_PARAMETERS.DRAGGABLE_COORDS_X}px;`;

// let resizableFinalCoords = () => {
//   const cords = USE.RESIZABLE_PAGE.getStartCoordinatesOfElement();
//   const x0 = cords[0] - 1;
//   const y0 = cords[1] - 1;
//   const x1 = ACTION_PARAMETERS.RESIZABLE_COORDS_1_X;
//   const y1 = ACTION_PARAMETERS.RESIZABLE_COORDS_1_Y;
//   const x2 = ACTION_PARAMETERS.RESIZABLE_COORDS_2_X;
//   const y2 = ACTION_PARAMETERS.RESIZABLE_COORDS_2_Y;
//   const x3 = ACTION_PARAMETERS.RESIZABLE_COORDS_3_X;
//   const y3 = ACTION_PARAMETERS.RESIZABLE_COORDS_3_Y;
//   const finalX = x0 + x1 + x2 + x3;
//   const finalY = y0 + y1 + y2 + y3;
//   return `left: ${finalX}px; top: ${finalY}px;`;
// };

describe('Testing all actions : ', function() {
  it('Prepairing - Open main site page', function() {
    browser.waitForAngularEnabled(false);
    USES.MAIN_PAGE_STEPS.openMainPage();
    expect(USE.MAIN_PAGE.getTitle()).toEqual(EXPECTED.MAIN_BROWSER_TITLE);
  });

  it('1st step performing draggable task', function() {
    USES.MAIN_PAGE_STEPS.openDraggablePage();
    expect(USE.DRAGGABLE_PAGE.getTitle()).toEqual(EXPECTED.DRAGGABLE_BROWSER_TITLE);
    USES.DRAGGABLE_PAGE_STEPS.performDraggableAction();
    //doesnt work properly(?)
    expect(USE.DRAGGABLE_PAGE.getCoordinatesOfElement()).toEqual(draggableFinalCoords);
    USE.DRAGGABLE_PAGE.toPageFrame();
  });

  it('2nd step performing droppable task', function() {
    USES.MAIN_PAGE_STEPS.openDroppablePage();
    expect(USE.DROPPABLE_PAGE.droppablePageTextIsPresent()).toBeTruthy();
    USES.DROPPABLE_PAGE_STEPS.performDroppableAction();
    browser.sleep(1000);
    expect(USE.DROPPABLE_PAGE.afterTestTextisPresent()).toBeTruthy();
    USE.DROPPABLE_PAGE.toPageFrame();
  });

  it('3rd step performing resizable task', function() {
    USES.MAIN_PAGE_STEPS.openResizablePage();
    expect(USE.RESIZABLE_PAGE.resizablePageTextIsPresent()).toBeTruthy();
    USES.RESIZABLE_PAGE_STEPS.performResizableSteps();
    browser.sleep(1000);
    // expect(USE.RESIZABLE_PAGE.getCoordinatesOfElement()).toEqual(resizableFinalCoords());
    USE.RESIZABLE_PAGE.toPageFrame();
  });

  it('4th step performing selectable task', function() {
    USES.MAIN_PAGE_STEPS.openSelectablePage();
    expect(USE.SELECTABLE_PAGE.selectablePageTextIsPresent()).toBeTruthy();
    USES.SELECTABLE_PAGE_STEPS.performSelectableAction();
    expect(USE.SELECTABLE_PAGE.afterTestAttributeChanged()).toEqual(EXPECTED.UI_SELECTED);
    USE.SELECTABLE_PAGE.toPageFrame();
  });

  it('5th step performing checkbox task', function() {
    USES.MAIN_PAGE_STEPS.openCheckboxradioPage();
    expect(USE.CHECKBOXRADIO_PAGE.checkboxradioPageTextIsPresent()).toBeTruthy();
    USES.CHECKBOXRADIO_PAGE_STEPS.performCheckboxSelectAction();
    //expect(USE.CHECKBOXRADIO_PAGE.allElementsActive()).toEqual('true');
    USE.CHECKBOXRADIO_PAGE.toPageFrame();
  });

  it('6th step performing selectmenu task', function() {
    USES.MAIN_PAGE_STEPS.openSelectmenuPage();
    expect(USE.SELECTMENU_PAGE.selectmenuPageTextIsPresent).toBeTruthy();
    USES.SELECTMENU_PAGE_STEPS.performSelectmenuSelectAction();
    //expect().toBeTruthy();
    USE.SELECTMENU_PAGE.toPageFrame();
  });
});
