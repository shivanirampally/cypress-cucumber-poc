import LoginPage from "../../pages/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Open Secure Bank
Given("User opens Secure Bank page", () => {
    cy.visit("/bank");
});

// Login using account
When("User logs in as {string}", (account) => {
    cy.fixture("loginData")
        .then(({ users }) => {
            const selectedUser =
                users.find(
                    user => user.account === account
                );

            expect(
                selectedUser,
                `Account '${account}' should exist`
            ).to.not.be.undefined;

            LoginPage.login(
                selectedUser.username,
                selectedUser.password
            );
        });
});

// Logout
When("User logs out", () => {
    LoginPage.logout();
});

// Verify Login page
Then("Login page should be displayed", () => {
    LoginPage.verifyLoginPage();
});
