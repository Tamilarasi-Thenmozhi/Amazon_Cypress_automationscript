import LoginPage from '../support/pages/LoginPage';
import HomePage from '../support/pages/HomePage';
import CartPage from '../support/pages/CartPage';

describe('Amazon Signup and Login', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();

  it('should create a new account and login successfully', () => {
    loginPage.visitLoginPage();
    loginPage.createAccount('Tamilarasi', 'tamilarasimthenmozhi@gmail.com', 'test@123!');
    loginPage.login('tamilarasimthenmozhi@gmail.com', 'test@123!');
    loginPage.verifyLoginSuccess('Tamilarasi');
    loginPage.logout();
    loginPage.login('tamilarasimthenmozhi@gmail.com', 'test@123!');
    loginPage.verifyLoginSuccess('Tamilarasi');
  });

  it('should login with valid emailid and password to login successfully', () => {
    loginPage.visitLoginPage();
    loginPage.login('tamilarasimthenmozhi@gmail', 'test@123!');
  });

  it('should login with valid phonenumber and password to login successfully', () => {
    loginPage.visitLoginPage();
    loginPage.login('9790718877', 'test@123!');
  });

  it('should Adding product item to cart successfully', () => {
    loginPage.visitLoginPage();
    loginPage.login('tamilarasimthenmozhi@gmail.com', 'test@123!');
    homePage.searchForItem('boat earbuds');
    homePage.verifyItemAddedToCart();
  });

  it('should display selected items and total price in the cart', () => {
    loginPage.visitLoginPage();
    loginPage.login('tamilarasimthenmozhi@gmail.com', 'test@123!');
    homePage.searchForItem('boat earbuds');
    homePage.verifyItemAddedToCart();
    cartPage.navigateToCartPage();
    cartPage.verifyCartContainsItems(1); // Assuming 1 item is added to cart
  });
});
