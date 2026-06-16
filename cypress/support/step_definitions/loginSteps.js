import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open Chorus application", () => {
  cy.loginMicrosoft();
});

Then("I should land on Chorus home page", () => {
  cy.url({ timeout: 60000 }).should("include", "chorusqa");

 cy.contains("Shivani Rampally", {
  timeout: 120000
}).should("be.visible");
});