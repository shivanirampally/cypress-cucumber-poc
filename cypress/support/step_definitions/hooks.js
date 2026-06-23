import {
  Before,
  After
} from "@badeball/cypress-cucumber-preprocessor";

// Executes before every scenario
Before(() => {

    cy.log("Scenario execution started");
});

// Smoke Suite Hook
Before({ tags: "@smoke" }, () => {

    cy.log("Executing Smoke Suite");
});

// Regression Suite Hook
Before({ tags: "@regression" }, () => {

    cy.log("Executing Regression Suite");
});

// E2E Suite Hook
Before({ tags: "@e2e" }, () => {

    cy.log("Executing E2E Suite");
});

// Executes after every scenario
After(() => {

    cy.clearCookies();

    cy.clearLocalStorage();

    cy.log("Scenario execution completed");
});