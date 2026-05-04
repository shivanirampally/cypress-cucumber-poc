import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Before Hook - Test Started");
});

After(() => {
  cy.log("After Hook - Test Completed");
});