class LoginPage {

    // Login page elements
    pageHeader() {
        return cy.contains("SecureBank");
    }

    usernameField() {
        return cy.get('[data-testid="login-username-input"]');
    }

    passwordField() {
        return cy.get('[data-testid="login-password-input"]');
    }

    loginButton() {
        return cy.get('[data-testid="login-submit-btn"]');
    }

    logoutButton() {
        return cy.get('[data-testid="topbar-logout-btn"]');
    }

    // Login actions
    login(username = "", password = "") {
        this.usernameField().clear();
        if (username.trim()) {
            this.usernameField().type(username);
        }

        this.passwordField().clear();
        if (password.trim()) {
            this.passwordField().type(password);
        }

        cy.log(`Logging in as ${username}`);
        this.loginButton().click();
    }

    logout() {
    this.logoutButton()
        .should("be.visible")
        .click();
}

    // Login validations
    verifyLoginPage() {
    this.pageHeader()
        .should("be.visible");

    this.loginButton()
        .should("be.visible");

    cy.location("pathname", { timeout: 10000 })
        .should("eq", "/bank/login");
}
}

export default new LoginPage();