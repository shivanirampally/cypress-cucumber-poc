class LoginPage {

    // Login page locators

    usernameField() {
        return cy.get("#username");
    }

    passwordField() {
        return cy.get("#password");
    }

    loginButton() {
        return cy.get('[data-testid="login-button"]');
    }

    logoutButton() {
        return cy.contains("Logout");
    }

    pageHeader() {
        return cy.contains("SecureBank");
    }

    // Login

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

    // Logout

    logout() {

        this.logoutButton().click();

    }

    // Verify Dashboard

    verifyDashboard() {

        cy.location("pathname")
            .should("eq", "/bank/dashboard");

        cy.contains("Welcome back")
            .should("be.visible");

        this.logoutButton()
            .should("be.visible");

    }

    // Verify Login Page

    verifyLoginPage() {

        cy.location("pathname")
            .should("eq", "/bank/login");

        this.loginButton()
            .should("be.visible");

    }

}

export default new LoginPage();