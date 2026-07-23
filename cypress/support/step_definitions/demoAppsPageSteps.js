import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoAppsPage from "../../pages/demoAppsPage";
import LoginPage from "../../pages/loginPage";

// Open Demo Apps page
Given("User is on QA Demo Apps page", () => {
    cy.visit("/demo");
});

// Verify Demo Apps page
Then("Demo Apps page should be displayed", () => {
    DemoAppsPage.pageHeader()
        .should("be.visible")
        .and("contain", "QA Demo Apps");

    cy.url().should("include", "/demo");

});

// Verify Bank Demo App
Then("Bank Demo App card should be displayed", () => {
    DemoAppsPage.bankDemoCard()
        .should("be.visible");
});

// Open Secure Bank
When("User opens Bank Demo App", () => {
    DemoAppsPage.bankDemoCard()
        .should("be.visible")
        .invoke("removeAttr", "target")
        .click();
});

// Verify Secure Bank Login page
Then("Secure Bank Login page should be displayed", () => {
    LoginPage.verifyLoginPage();
});