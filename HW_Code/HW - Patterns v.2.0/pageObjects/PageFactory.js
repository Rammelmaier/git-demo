import LoginPage from './Pages/LoginPage';
import InboxPage from './Pages/InboxPage';
import MailPage from './Pages/MailPage';
import Steps from './Pages/Steps';

class PageFactory {
  getPage(type) {
    switch (type) {
      case 'LoginPage':
        return LoginPage;
      case 'InboxPage':
        return InboxPage;
      case 'MailPage':
        return MailPage;
      case 'Steps':
        return Steps;
      default: {
        throw new Error(`The page with title ${type} doesn't exist!`);
      }
    }
  }
}

export default new PageFactory();
