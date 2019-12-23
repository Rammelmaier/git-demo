import { EXPECTED } from './sources';
import MainPage from './PageObjects/MainPage';
import MainPageSteps from './Steps/MainPageSteps';
import DraggablePage from './PageObjects/DraggablePage';
import DraggablePageSteps from './Steps/DraggablePageSteps';

describe('Testing all actions', function() {
  it('1st step - Open main site page', function() {
    browser.waitForAngularEnabled(false);
    MainPageSteps.openMainPage();
    browser.sleep(3000);
    expect(MainPage.getTitle()).toEqual(EXPECTED.MAIN_BROWSER_TITLE);
  });

  it('2nd step performing draggable task', function() {
    MainPageSteps.openDraggablePage();
    expect(DraggablePage.getTitle()).toEqual(EXPECTED.DRAGGABLE_BROWSER_TITLE);
    DraggablePageSteps.performingdraggableAction();
    browser.sleep(3000);
  });
});
