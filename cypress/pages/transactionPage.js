class TransactionPage {

    // New Transaction

    newTransactionButton() {
        return cy.get('[data-testid="quick-new-transaction"]');
    }

    // Transaction Type

    transactionTypeDropdown() {
        return cy.get('[data-testid="transaction-type-select"]');
    }

    transactionTypeSelect() {
        return cy.get('select').eq(0);
    }

    // From Account

    fromAccountDropdown() {
        return cy.get('[data-testid="from-account-select"]');
    }

    fromAccountSelect() {
        return cy.get('select').eq(1);
    }

    // To Account

    toAccountDropdown() {
        return cy.get('[data-testid="to-account-select"]');
    }

    toAccountSelect() {
        return cy.get('select').eq(2);
    }

    // Amount

    amountField() {
        return cy.get('[data-testid="transaction-amount-input"]');
    }

    // Description

    descriptionField() {
        return cy.get('[data-testid="transaction-description-input"]');
    }

    // Notification

    notificationCheckbox() {
        return cy.get('[data-testid="notification-checkbox"]');
    }

    // Submit

    submitButton() {
        return cy.get('[data-testid="submit-transaction-button"]');
    }

    // Cancel

    cancelButton() {
        return cy.get('[data-testid="cancel-transaction-button"]');
    }
}

export default new TransactionPage();