import LoginPage from '../support/pages/LoginPage';
import HomePage from '../support/pages/HomePage';
import CartPage from '../support/pages/CartPage';

describe('Invalid login and cart functionality', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const cartPage = new CartPage();


    it('should not login with invalid emailid and password', () => {
        loginPage.visitLoginPage();
        loginPage.login('tamilarasimthenmozhi@gmail', 'test@123');
        cy.wait(2000)
    });

    it('should redirect guest user to sign in screen when trying to checkout', () => {
        homePage.searchForItem('boat earbuds');
        homePage.verifyItemAddedToCart();
        cartPage.navigateToCartPage();
        cy.url().should('include', '/signin');
    });

    it("should not show 'Proceed to buy' button when cart is empty", () => {
        cartPage.navigateToCartPage();
        cy.contains('Your Amazon Cart is empty').should('be.visible');
        cy.get('#sc-buy-box-ptc-button').should('not.exist');
    });
});
