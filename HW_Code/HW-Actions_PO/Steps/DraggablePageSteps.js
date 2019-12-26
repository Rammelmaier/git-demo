import DraggablePage from '../PageObjects/DraggablePage';

class DraggablePageSteps {
  constructor() {}

  performDraggableAction() {
    DraggablePage.switchFrameToDraggable();
    DraggablePage.moveElement();
  }
}

export default new DraggablePageSteps();
