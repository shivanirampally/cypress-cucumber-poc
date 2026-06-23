import LoginPage from "../../pages/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Open Secure Bank login page
Given("User opens Secure Bank page", () => {

    cy.visit("/bank");
});

// Login using role-based credentials from fixture file
When("User logs in as {string}", (role) => {

    cy.fixture("loginData").then((data) => {

        // Find user matching requested role
        const user = data.users.find(
            user => user.role === role
        );

        // Verify user exists in fixture data
        expect(
            user,
            `User with role ${role} should exist`
        ).to.not.be.undefined;

        // Perform login
        LoginPage.login(
            user.username,
            user.password
        );
    });
});

// Logout from application
When("User logs out", () => {

    LoginPage.logout();
});

// Verify logged-in user role and dashboard access
Then("User role {string} should be displayed", (role) => {

    LoginPage.verifyLoggedInUser(role);

    cy.log(`${role} logged in successfully`);
});

// Verify successful login for role-based access scenario
Then("{string} user should be logged in successfully", (role) => {

    LoginPage.verifyLoggedInUser(role);
});