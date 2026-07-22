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
        this.logoutButton().click();
    }

    // Login validations
    verifyLoginPage() {
        cy.location("pathname")
            .should("eq", "/bank/login");

        this.pageHeader()
            .should("be.visible");
        this.loginButton()
            .should("be.visible");
    }

    verifyDashboard() {
        cy.location("pathname")
            .should("eq", "/bank/dashboard");
        cy.contains("Welcome back")
            .should("be.visible");
        this.logoutButton()
            .should("be.visible");
    }

}

export default new LoginPage();