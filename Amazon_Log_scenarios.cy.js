import LoginPage from '../support/pages/LoginPage';
import HomePage from '../support/pages/HomePage';
import CartPage from '../support/pages/CartPage';

describe('User authentication with different authentication methods', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const cartPage = new CartPage();

    it('should login with email', () => {
        loginPage.visitLoginPage();
        loginPage.loginWithEmail('tamilarasimthenmozhi@gmail', 'test@123!');
        cy.url().should('include', 'www.amazon.com');
    });

    it('should login with phone number', () => {
        loginPage.visitLoginPage();
        loginPage.loginWithPhoneNumber('9791718877', 'test@123!');
        cy.url().should('include', 'www.amazon.com');
    });

    it('should recover/reset password', () => {
        loginPage.visitLoginPage();
        loginPage.forgotPassword('tamilarasimthenmozhi@gmail.com');
        cy.wait(50000);
    });

    it('should add multiple items to the cart and verify', () => {
        loginPage.visitLoginPage();
        loginPage.loginWithEmail('tamilarasimthenmozhi@gmail', 'test@123!');
        homePage.searchForItem('boat earbuds');
        homePage.verifyItemAddedToCart();
        homePage.searchForItem('Realme buds2');
        homePage.verifyItemAddedToCart();
        cartPage.navigateToCartPage();
        cartPage.verifyCartContainsItems(2);
    });
});
