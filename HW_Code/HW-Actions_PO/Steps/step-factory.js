import MainPageSteps from './MainPageSteps';
import DraggablePageSteps from './DraggablePageSteps';
import DroppablePageSteps from './DroppablePageSteps';
import ResizablePageSteps from './ResizablePageSteps';
import SelectablePageSteps from './SelectablePageSteps';
import CheckboxradioPageSteps from './CheckboxradioPageSteps';
import SelectmenuPageSteps from './SelectmenuPageSteps';

class StepFactory {
  getStep(type) {
    switch (type) {
      case 'MainPageSteps':
        return MainPageSteps;
      case 'DraggablePageSteps':
        return DraggablePageSteps;
      case 'DroppablePageSteps':
        return DroppablePageSteps;
      case 'ResizablePageSteps':
        return ResizablePageSteps;
      case 'SelectablePageSteps':
        return SelectablePageSteps;
      case 'CheckboxradioPageSteps':
        return CheckboxradioPageSteps;
      case 'SelectmenuPageSteps':
        return SelectmenuPageSteps;
      default: {
        throw new Error(`The page with title ${type} doesn't exist!`);
      }
    }
  }
}

const STEPFACTORY = new StepFactory();

const USES = {
  MAIN_PAGE_STEPS: STEPFACTORY.getStep('MainPageSteps'),
  DRAGGABLE_PAGE_STEPS: STEPFACTORY.getStep('DraggablePageSteps'),
  DROPPABLE_PAGE_STEPS: STEPFACTORY.getStep('DroppablePageSteps'),
  RESIZABLE_PAGE_STEPS: STEPFACTORY.getStep('ResizablePageSteps'),
  SELECTABLE_PAGE_STEPS: STEPFACTORY.getStep('SelectablePageSteps'),
  CHECKBOXRADIO_PAGE_STEPS: STEPFACTORY.getStep('CheckboxradioPageSteps'),
  SELECTMENU_PAGE_STEPS: STEPFACTORY.getStep('SelectmenuPageSteps'),
};

export { USES };
