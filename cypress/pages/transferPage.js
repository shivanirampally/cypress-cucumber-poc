class TransferPage {

    // Elements
    transferForm() {
        return cy.get('[data-testid="transfer-form"]');
    }

    fromAccount() {
        return cy.get('[data-testid="transfer-from-select"]');
    }

    toAccount() {
        return cy.get('[data-testid="transfer-to-select"]');
    }

    amount() {
        return cy.get('[data-testid="transfer-amount-input"]');
    }

    memo() {
        return cy.get('input[name="transfer_memo_field"]');
    }

    reviewTransferBtn() {
        return cy.get('[data-testid="review-transfer-btn"]');
    }

    confirmTransferBtn() {
        return cy.contains("button", "Confirm Transfer");
    }


    makeAnotherTransferBtn() {
        return cy.contains("button", "Make Another Transfer");
    }

    // Navigation
    openTransferPage() {
    cy.get('[data-testid="sidebar-link-transfer"]')
        .should("be.visible")
        .click();
}

    // Business Method
    transferMoney(data) {
        this.validateTransfer(data);

        // ---------- From Account ----------
        this.fromAccount()
            .click();

        cy.get('[role="listbox"]:visible')
            .contains(data.fromAccount)
            .click();

        // ---------- To Account ----------
        this.toAccount()
            .click();

        cy.get('[role="listbox"]:visible')
            .contains(data.toAccount)
            .click();

        // ---------- Amount ----------
        this.amount()
            .clear()
            .type(data.amount);

        // ---------- Memo ----------
        this.memo()
            .clear()
            .type(data.memo);

        // Cypress Alias
        this.reviewTransferBtn()
            .as("reviewButton");

        cy.get("@reviewButton")
            .should("be.enabled")
            .click();
    }

    // Validations
    verifyTransferPage() {
        cy.location("pathname")
            .should("eq", "/bank/transfer");

        this.transferForm()
            .should("be.visible");
    }

    verifyReviewPopup() {
        cy.contains("Confirm Transfer")
            .should("be.visible");
    }

    confirmTransfer() {
        this.confirmTransferBtn()
            .click();
    }

    verifyTransferSuccess() {
        cy.location("pathname")
            .should("include", "/bank/transfer/confirmation");

        cy.contains("Transfer Successful")
            .should("be.visible");

        cy.contains("Your funds have been moved.")
            .should("be.visible");

        cy.contains("Transfer Details")
            .should("be.visible");
    }

    navigateToDashboard() {
        this.backToDashboardBtn()
            .click();
    }

    startAnotherTransfer() {
        this.makeAnotherTransferBtn()
            .click();
    }

    // JavaScript Concepts
    validateTransfer(data) {
        const amount = Number(data.amount);

        // if - else if - else
        if (amount <= 0) {
            throw new Error("Transfer amount should be greater than zero.");
        } else if (amount > 5000) {
            cy.log("High Value Transfer");
        } else {
            cy.log("Regular Transfer");
        }

        // Nested if
        if (data.fromAccount !== data.toAccount) {
            if (amount > 0) {
                cy.log("Valid Account Selection");
            }

        }

        // Ternary Operator
        const transferType =
            amount > 1000
                ? "Priority"
                : "Standard";
        cy.log(`Transfer Type : ${transferType}`);

        // Arrays
        const labels = [
            "From Account",
            "To Account",
            "Amount",
            "Memo"
        ];

        // For Loop
        for (let i = 0; i < labels.length; i++) {
            cy.log(labels[i]);
        }

        // For...of Loop
        const accounts = [
            data.fromAccount,
            data.toAccount
        ];

        for (const account of accounts) {
            cy.log(account);
        }

        // While Loop
        let attempt = 1;
        while (attempt <= 2) {
            cy.log(`Attempt ${attempt}`);
            attempt++;
        }

        // Do...While Loop
        let retry = 1;
        do {
            cy.log(`Retry ${retry}`);
            retry++;
        } while (retry <= 2);
    }

}

export default new TransferPage();