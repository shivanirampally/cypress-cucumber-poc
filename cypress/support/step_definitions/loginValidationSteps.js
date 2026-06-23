import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/loginPage";

// Enter username and password for login validation scenarios
When(
    "User enters username {string} and password {string}",
    (username, password) => {
        // Clear username field
        LoginPage.usernameField()
            .clear();
        // Enter username if provided
        if (username) {
            LoginPage.usernameField()
                .type(username);
        }
        // Clear password field
        LoginPage.passwordField()
            .clear();
        // Enter password if provided
        if (password) {
            LoginPage.passwordField()
                .type(password);
        }
        // Submit login request
        LoginPage.loginButton()
            .click();
    }
);

// Verify login result for positive and negative scenarios
Then(
    "Login result should be {string}",
    (result) => {
        if (result === "success") {
        // Verify successful login
            cy.url()
                .should("include", "/dashboard");

            LoginPage.logoutButton()
                .should("be.visible");

            LoginPage.logout();

        } else {
        // Verify user remains on login page
            cy.url()
                .should("include", "/bank");

            LoginPage.loginButton()
                .should("be.visible");
        }
    }
);