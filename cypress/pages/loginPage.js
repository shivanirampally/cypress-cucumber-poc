class LoginPage {
//Username, password, login button, logout button, user role label
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

    userRoleLabel() {
        return cy.get("header");
    }

    login(username, password) {

        this.usernameField()
            .clear()
            .type(username);

        this.passwordField()
            .clear()
            .type(password);

        this.loginButton()
            .click();
    }

    logout() {

        this.logoutButton()
            .click();
    }

//Verify the logged in user role and dashboard page
    verifyLoggedInUser(role) {

        this.userRoleLabel()
            .should("contain.text", role);

        cy.url()
            .should("include", "/dashboard");

        this.logoutButton()
            .should("be.visible");
    }
}

export default new LoginPage();