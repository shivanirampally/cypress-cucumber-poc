import LoginPage from "../../pages/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User opens Secure Bank page", () => {

    cy.visit("/bank");
});

When("User logs in as {string}", (role) => {

    cy.fixture("loginData").then((data) => {

        const user = data.users.find(
            user => user.role === role
        );

        expect(
            user,
            `User with role ${role} should exist`
        ).to.not.be.undefined;

        LoginPage.login(
            user.username,
            user.password
        );
    });
});

When("User logs out", () => {

    LoginPage.logout();
});

Then("User role {string} should be displayed", (role) => {

    // Verify dashboard loaded
    cy.url()
      .should("include", "/dashboard");

    // Verify role displayed in header
    cy.contains(role)
      .should("be.visible");

    // Verify logout button visible
    cy.contains("Logout")
      .should("be.visible");

    cy.log(`${role} logged in successfully`);
});

Then("{string} user should be logged in successfully", (role) => {

    cy.url()
      .should("include", "/dashboard");

    cy.contains(role)
      .should("be.visible");

    cy.contains("Logout")
      .should("be.visible");
});