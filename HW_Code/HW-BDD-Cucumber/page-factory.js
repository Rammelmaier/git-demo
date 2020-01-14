import MainPage from './PageObject/MainPage';

class PageFactory {
  getPage(type) {
    switch (type) {
      case 'MainPage':
        return MainPage;
      default: {
        throw new Error(`The page with title ${type} doesn't exist!`);
      }
    }
  }
}

export default new PageFactory();
