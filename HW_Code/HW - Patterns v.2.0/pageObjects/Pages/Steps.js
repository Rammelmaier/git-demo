class Steps {
  constructor() {}

  async openPage(source) {
    await browser.get(source);
  }
}

export default new Steps();
