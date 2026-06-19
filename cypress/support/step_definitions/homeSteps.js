import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User opens QA Playground website", () => {
  cy.visit("/");
});

Then("Home page should be displayed", () => {
  cy.contains("Master Automation Testing")
    .should("be.visible");
});