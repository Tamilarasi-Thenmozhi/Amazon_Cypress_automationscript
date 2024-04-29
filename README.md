# Cypress Automated Testing for Amazon Functionality

This project demonstrates automated testing of Amazon functionality using Cypress. The test cases are categorized into three main scenarios: Positive, Negative, and Logical.

## Scenarios and Test Cases

### Positive Scenarios (Amazon_Pos_scenarios.cy.js)

1. **Amazon Signup and Login**
   - Create a new account and login successfully
   - Login with valid email ID and password successfully
   - Login with valid phone number and password successfully
   - Add a product item to the cart successfully
   - Display selected items and total price in the cart

### Negative Scenarios (Amazon_Neg_scenarios.cy.js)

1. **Invalid Login and Cart Functionality**
   - Should not login with invalid email ID and password
   - Should redirect guest user to sign-in screen when trying to checkout
   - Should not show 'Proceed to buy' button when cart is empty

### Logical Scenarios (Amazon_Log_scenarios.cy.js)

1. **User Authentication with Different Methods**
   - Should login with email
   - Should login with phone number
   - Verify functionality of password recovery/reset
   - Should add multiple items to the cart and verify

## Page Object Model (POM)

The project is implemented using the Page Object Model (POM) design pattern for better organization and maintenance of test code. Below are the files representing different pages:

- **CartPage.js**: Contains methods for navigating to the cart page and verifying items in the cart.
- **LoginPage.js**: Includes methods for visiting the login page, logging in with email/phone, and creating a new account.
- **HomePage.js**: Contains methods for searching for items and verifying item addition to the cart.
