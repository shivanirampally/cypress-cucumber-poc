import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import bankPage from "../../pages/demoAppsPage";
import transactionPage from "../../pages/transactionPage";

// Verify New Transaction button is displayed
Then("New Transaction button should be visible", () => {

    transactionPage.newTransactionButton()
        .should("be.visible");
});

// Open New Transaction popup
When("User opens New Transaction popup", () => {

    transactionPage.newTransactionButton()
        .click();
});

// Verify transaction popup displayed
Then("Transaction popup should be displayed", () => {

    cy.get('[role="dialog"]', {
        timeout: 10000
    }).should("be.visible");

    transactionPage.transactionTypeDropdown()
        .should("exist");
});

// Fill transaction details using fixture data
When("User fills transaction details", () => {

    cy.fixture("transactionData").then((data) => {

        transactionPage.fillTransactionDetails(
            data.transaction
        );
    });
});

// Submit transaction
When("User submits transaction", () => {

    transactionPage.submitTransaction();
});

// Navigate back to dashboard
When("User navigates back to dashboard", () => {

    cy.visit("/bank/dashboard");

    transactionPage.newTransactionButton()
        .should("be.visible");
});

// Cancel transaction
When("User clicks Cancel button", () => {

    transactionPage.cancelTransaction();
});

// Verify transaction created successfully
Then("Transaction should be created successfully", () => {

    cy.fixture("transactionData").then((data) => {

        cy.contains(
            data.transaction.description,
            {
                timeout: 10000
            }
        ).should("exist");
    });
});

// Verify transaction popup closed after cancel
Then("Transaction popup should be closed", () => {

    cy.get('[role="dialog"]')
        .should("not.exist");
});