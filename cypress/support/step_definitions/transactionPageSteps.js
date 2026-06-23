import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import transactionPage from "../../pages/transactionPage";

Then("New Transaction button should be visible", () => {

    transactionPage.newTransactionButton()
        .should("be.visible");
});

When("User opens New Transaction popup", () => {

    transactionPage.newTransactionButton()
        .click();

    cy.get('[role="dialog"]', {
        timeout: 10000
    }).should("be.visible");

    transactionPage.transactionTypeDropdown()
        .should("exist");
});

When("User creates a transaction", () => {

    // Transaction Type

    transactionPage.transactionTypeSelect()
        .select("transfer", { force: true })
        .should("have.value", "transfer");

    // From Account

    transactionPage.fromAccountSelect()
        .select("Checking Account - $2,500.00", {
            force: true
        });

    // To Account

    transactionPage.toAccountSelect()
        .select("Primary Savings (1001234567)", {
            force: true
        });

    // Amount

    transactionPage.amountField()
        .clear()
        .type("10");

    // Description

    transactionPage.descriptionField()
        .clear()
        .type("Smoke Test Transaction");

    // Notification

    transactionPage.notificationCheckbox()
        .click({ force: true });

    // Submit

    transactionPage.submitButton()
        .should("be.enabled")
        .click();
});

Then("Transaction should be created successfully", () => {

    cy.contains("Smoke Test Transaction", {
        timeout: 10000
    }).should("exist");

});