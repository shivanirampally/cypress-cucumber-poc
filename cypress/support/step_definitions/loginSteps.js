import LoginPage from "../../pages/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//================================================
// Navigation
//================================================

/**
 * Opens the Secure Bank Login page.
 */
Given("User opens Secure Bank page", () => {

    cy.visit("/bank");

});

//================================================
// Login Actions
//================================================

/**
 * Logs in using account credentials retrieved
 * from the fixture file.
 */
When("User logs in as {string}", (account) => {

    cy.fixture("loginData").then(({ users }) => {

        // Find matching account from fixture data
        const selectedUser = users.find(
            user => user.account === account
        );

        // Ensure account exists before login
        expect(
            selectedUser,
            `Account '${account}' should exist`
        ).to.not.be.undefined;

        // Perform login
        LoginPage.login(
            selectedUser.username,
            selectedUser.password
        );

    });

});

/**
 * Logs out from the application.
 */
When("User logs out", () => {

    LoginPage.logout();

});

//================================================
// Login Validations
//================================================

/**
 * Validates application behaviour
 * for different account types.
 *
 * JavaScript Concept:
 * switch statement
 */
Then("{string} account should be validated", (account) => {

    switch (account) {

        case "standard_user":

            LoginPage.verifyDashboard();
            LoginPage.logout();
            break;

        case "locked_user":

            LoginPage.verifyLockedAccount();
            break;

        case "frozen_user":

            LoginPage.verifyFrozenAccount();
            LoginPage.logout();
            break;

        case "overdraft_user":

            LoginPage.verifyOverdraftAccount();
            LoginPage.logout();
            break;

        case "slow_user":

            LoginPage.verifyDashboard();
            LoginPage.logout();
            break;

        case "error_user":

            LoginPage.verifyErrorAccount();
            break;

        case "admin_user":

            LoginPage.verifyAdminDashboard();
            LoginPage.logout();
            break;

        default:

            throw new Error(`Unsupported account type: ${account}`);

    }

});