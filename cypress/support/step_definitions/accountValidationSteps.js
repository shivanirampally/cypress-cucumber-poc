import LoginPage from "../../pages/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//================================================
// Navigation
//================================================

/**
 * Opens Secure Bank Login page.
 */
Given("User opens Secure Bank page", () => {

    cy.visit("/bank");

});

//================================================
// Login Actions
//================================================

/**
 * Logs in using account credentials
 * retrieved from fixture data.
 *
 * JavaScript Concepts:
 * - Arrays
 * - Objects
 * - find()
 * - Arrow Functions
 * - Destructuring
 */
When("User logs in as {string}", (account) => {

    cy.fixture("loginData")
        .then(({ users }) => {

            const selectedUser =
                users.find(
                    user => user.account === account
                );

            expect(selectedUser).to.not.be.undefined;

            LoginPage.login(
                selectedUser.username,
                selectedUser.password
            );

        });

});

//================================================
// Account Validation
//================================================

/**
 * Validates application behaviour
 * for different account types.
 *
 * JavaScript Concept:
 * switch statement
 */
Then(
    "{string} account should be validated",
    (account) => {

        switch (account) {

            case "standard_user":

                LoginPage.verifyDashboard();

                LoginPage.logout();

                break;

            case "locked_user":

                cy.contains("locked")
                    .should("be.visible");

                break;

            case "frozen_user":

                LoginPage.verifyDashboard();

                LoginPage.logout();

                break;

            case "overdraft_user":

                LoginPage.verifyDashboard();

                LoginPage.logout();

                break;

            case "slow_user":

                LoginPage.verifyDashboard();

                LoginPage.logout();

                break;

            case "error_user":

                LoginPage.verifyDashboard();

                LoginPage.logout();

                break;

            case "admin_user":

                LoginPage.verifyDashboard();

                LoginPage.logout();

                break;

            default:

                throw new Error(
                    `Unsupported account : ${account}`
                );

        }

    });