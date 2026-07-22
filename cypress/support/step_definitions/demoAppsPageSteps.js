import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import DemoAppsPage from "../../pages/demoAppsPage";
import LoginPage from "../../pages/loginPage";

// Open Demo Apps page
Given("User is on QA Demo Apps page", () => {

    cy.visit("/demo");

});

// Verify Demo Apps page
Then("QA Demo Apps page should be displayed", () => {

    cy.location("pathname")
        .should("eq", "/demo");

    DemoAppsPage.pageHeader()
        .should("be.visible");

});

// Verify Bank Demo App
Then("Bank Demo App card should be displayed", () => {

    DemoAppsPage.bankDemoCard()
        .should("be.visible");

});

// Open Secure Bank
When("User opens Bank Demo App", () => {

    DemoAppsPage.bankDemoCard()
        .invoke("removeAttr", "target")
        .click();

});

// Verify Secure Bank Login
Then("Secure Bank Login page should be displayed", () => {

    cy.location("pathname")
        .should("eq", "/bank/login");

    LoginPage.pageHeader()
        .should("be.visible");

});