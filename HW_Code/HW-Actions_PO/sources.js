const PAGES = {
  MAIN_PAGE_URL: 'https://jqueryui.com/',
  // DRAGGABLE_PAGE_URL: 'https://jqueryui.com/draggable/',
  // DROPPABLE_PAGE_URL: 'https://jqueryui.com/droppable/',
  // RESIZIBLE_PAGE_URL: 'https://jqueryui.com/resizable/',
};

const EXPECTED = {
  MAIN_BROWSER_TITLE: 'jQuery UI',
  DRAGGABLE_BROWSER_TITLE: 'Draggable | jQuery UI',
  //DRAGGABLE_FINAL_COORDS: 'left: 120px; top: 120px;',
};

const ACTION_PARAMETERS = {
  DRAGGABLE_COORDS_X: 120,
  DRAGGABLE_COORDS_Y: 120,
  RESIZABLE_COORDS_1_X: 135,
  RESIZABLE_COORDS_1_Y: 0,
  RESIZABLE_COORDS_2_X: 0,
  RESIZABLE_COORDS_2_Y: 185,
  RESIZABLE_COORDS_3_X: -35,
  RESIZABLE_COORDS_3_Y: -35,
};

// const MAIN_PAGE_URL = 'https://jqueryui.com/';
// const DRAGGABLE_PAGE_URL = 'https://jqueryui.com/draggable/';

// export { MAIN_PAGE_URL, DRAGGABLE_PAGE_URL };

export { PAGES, EXPECTED, ACTION_PARAMETERS };
