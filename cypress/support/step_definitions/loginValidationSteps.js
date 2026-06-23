import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/loginPage";

When(
    "User enters username {string} and password {string}",
    (username, password) => {

        LoginPage.usernameField()
            .clear();

        if (username) {
            LoginPage.usernameField()
                .type(username);
        }

        LoginPage.passwordField()
            .clear();

        if (password) {
            LoginPage.passwordField()
                .type(password);
        }

        LoginPage.loginButton()
            .click();
    }
);

Then(
    "Login result should be {string}",
    (result) => {

        if (result === "success") {

            cy.url()
                .should("include", "/dashboard");

            LoginPage.logoutButton()
                .should("be.visible");

            LoginPage.logout();

        } else {

            cy.url()
                .should("include", "/bank");

            LoginPage.loginButton()
                .should("be.visible");
        }
    }
);