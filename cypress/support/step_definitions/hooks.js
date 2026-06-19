import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Browser launched and Scenario started");
});

After(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});