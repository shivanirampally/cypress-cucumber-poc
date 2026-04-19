import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open Chorus application", () => {
  cy.loginMicrosoft();
});

When("I login using Microsoft credentials", () => {
  // handled already
});

Then("I should land on Chorus home page", () => {

  cy.url({ timeout: 60000 }).should("include", "chorusqa");

  cy.contains("Learning and Development", { timeout: 60000 })
    .should("be.visible");

});