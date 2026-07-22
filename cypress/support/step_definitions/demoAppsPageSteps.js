import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoAppsPage from "../../pages/demoAppsPage";

// Navigate to QA Demo Apps page
Given("User is on QA Demo Apps page", () => {
    cy.log("Opening QA Demo Apps page");
    cy.visit("/demo");
});

// Verify QA Demo Apps page
Then("QA Demo Apps page should be displayed", () => {
    cy.log("Verifying QA Demo Apps page");
    cy.url()
      .should("include", "/demo");

    DemoAppsPage.pageHeader()
        .should("be.visible")
        .and("contain.text", "QA Demo Apps");

    cy.log("QA Demo Apps page verified successfully");
});

// Verify Bank Demo App card
Then("Bank Demo App card should be displayed", () => {
    cy.log("Verifying Bank Demo App card");

    DemoAppsPage.bankDemoCard()
        .should("be.visible")
        .and("contain.text", "Bank Demo App");

    cy.log("Bank Demo App card verified successfully");

});

// Open Bank Demo App
When("User opens Bank Demo App", () => {

    cy.log("Opening Bank Demo Application");
    DemoAppsPage.bankDemoCard()
        .invoke("removeAttr", "target")
        .click();

});

// Verify Secure Bank Login page
Then("Secure Bank Login page should be displayed", () => {
    cy.log("Verifying Secure Bank Login page");
    
    cy.url()
      .should("include", "/bank/login");
    cy.contains("SecureBank")
      .should("be.visible");

    cy.log("Secure Bank Login page verified successfully");

});