import LoginPage from "../../pages/loginPage";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

//================================================
// Login Actions
//================================================

/**
 * Enters login credentials and submits login request.
 * Reuses Login Page business method.
 */
When(
    "User enters username {string} and password {string}",
    (username, password) => {

        LoginPage.login(username, password);

    }
);

//================================================
// Login Validations
//================================================

/**
 * Validates login result for
 * positive and negative scenarios.
 */
Then(
    "Login result should be {string}",
    (result) => {

        if (result === "success") {

            LoginPage.verifyDashboard();

            LoginPage.logout();

        } else {

            LoginPage.verifyLoginPage();

        }

        cy.log(`Login Validation : ${result}`);

    }
);