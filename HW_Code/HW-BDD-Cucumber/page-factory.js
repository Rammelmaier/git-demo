import MainPage from './PageObject/MainPage';
import SearchPage from './PageObject/SearchPage';
import ResultPage from './PageObject/ResultPage';
import CartPage from './PageObject/CartPage';

class PageFactory {
  getPage(type) {
    switch (type) {
      case 'MainPage':
        return MainPage;
      case 'SearchPage':
        return SearchPage;
      case 'ResultPage':
        return ResultPage;
      case 'CartPage':
        return CartPage;
      default: {
        throw new Error(`The page with title ${type} doesn't exist!`);
      }
    }
  }
}

export default new PageFactory();
