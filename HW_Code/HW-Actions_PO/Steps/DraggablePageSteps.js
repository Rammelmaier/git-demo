import DraggablePage from '../PageObjects/DraggablePage';

class DraggablePageSteps {
  constructor() {}

  performdraggableAction() {
    DraggablePage.switchFrameToDraggable();
    DraggablePage.moveElement();
  }
}

export default new DraggablePageSteps();
