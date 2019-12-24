import DroppablePage from '../PageObjects/DroppablePage';

class DroppablePageSteps {
  constructor() {}

  performdroppableAction() {
    DroppablePage.switchFrameToDroppable();
    DroppablePage.moveElement();
  }
}

export default new DroppablePageSteps();
