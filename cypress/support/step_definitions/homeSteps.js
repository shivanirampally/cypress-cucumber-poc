import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

// Launch QA Playground application
Given("User opens QA Playground website", () => {
  cy.visit("/");
});

// Verify Home Page is displayed successfully
Then("Home page should be displayed", () => {
  cy.contains("Master Automation Testing")
    .should("be.visible");
});