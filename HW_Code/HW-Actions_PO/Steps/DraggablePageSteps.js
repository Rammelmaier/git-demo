import DraggablePage from '../PageObjects/DraggablePage';

class DraggablePageSteps {
  constructor() {}

  performingdraggableAction() {
    DraggablePage.switchFrameToDraggable();
    DraggablePage.mooveElement();
  }
}

export default new DraggablePageSteps();
