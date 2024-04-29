class LoginPage {
  visitLoginPage() {
    cy.visit('https://www.amazon.com/');
    cy.contains('Account & Lists').click();
    cy.contains('Sign in').click({ force: true });
  }

  createAccount(customerName, email, password) {
    cy.contains('Create your Amazon account').click();
    cy.get('input[name="customerName"]').type(customerName);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="passwordCheck"]').type(password);
    cy.get('#continue').click();
    cy.wait(50000); // Wait for OTP verification
    cy.get('.a-dropdown-prompt').click();
    cy.contains('India +91 ').click();
    cy.get('input[name="cvf_phone_num"]').type('6382527137');
  }

  login(email, password) {
    cy.get('#ap_email').type(email);
    cy.get('#continue').click();
    cy.get('#ap_password').type(password);
    cy.get('#signInSubmit').click();
  }

  verifyLoginSuccess(username) {
    cy.contains(`Hello, ${username}`).should('be.visible');
  }

  logout() {
    cy.contains(`Hello, ${username}`).click();
    cy.contains('Sign Out').click();
    cy.contains('Hello, Sign in').should('be.visible');
  }
  loginWithEmail(email, password) {
        cy.get('#ap_email').type(email);
        cy.get('#continue').click();
        cy.get('#ap_password').type(password);
        cy.get('#signInSubmit').click();
    }

    loginWithPhoneNumber(phoneNumber, password) {
        cy.get('#ap_email').type(phoneNumber);
        cy.get('#continue').click();
        cy.get('#ap_password').type(password);
        cy.get('#signInSubmit').click();
    }

    forgotPassword(email) {
        cy.contains('Need help?').click();
        cy.contains('Forgot your password?').click();
        cy.get('#ap_email').type(email);
        cy.get('#continue').click();
        // Add more steps to complete password recovery/reset if needed
    }
}

export default LoginPage;
