class Services {
  constructor() {}

  openPage(source) {
    browser.get(source);
  }
}

export default new Services();
