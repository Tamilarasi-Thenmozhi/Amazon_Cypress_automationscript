class HomePage {
  searchForItem(itemName) {
    cy.get('input[name="field-keywords"]').type(itemName + '{enter}');
  }

  verifyItemAddedToCart() {
    cy.contains('Item Added').should('have.text', 'Item Added');
  }
}

export default HomePage;
