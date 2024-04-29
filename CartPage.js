class CartPage {
  navigateToCartPage() {
    cy.get('#nav-cart').click();
  }

  verifyCartContainsItems(expectedItemCount) {
    cy.get('.sc-list-item').should('have.length', expectedItemCount);
  }
}

export default CartPage;

