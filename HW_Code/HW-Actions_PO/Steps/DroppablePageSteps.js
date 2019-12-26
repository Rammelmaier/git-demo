import DroppablePage from '../PageObjects/DroppablePage';

class DroppablePageSteps {
  constructor() {}

  performDroppableAction() {
    DroppablePage.switchFrameToDroppable();
    DroppablePage.moveElement();
  }
}

export default new DroppablePageSteps();
