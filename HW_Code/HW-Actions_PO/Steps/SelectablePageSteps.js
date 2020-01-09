import SelectablePage from '../PageObjects/SelectablePage';

class SelectablePageSteps {
  constructor() {}

  performSelectableAction() {
    SelectablePage.switchFrameToSelectable();
    SelectablePage.selectElement();
  }
}

export default new SelectablePageSteps();
