class BankPage {
//Open Bank App button
    openBankAppButton() {
        return cy.contains("Open Bank App");
    }

// Navigate to Secure Bank page
    clickOpenBankApp() {
        this.openBankAppButton()
            .scrollIntoView()
            .should("be.visible")
            .click();
    }
    
// Verify Secure Bank page loaded
    verifyBankPageLoaded() {
        cy.url().should("include", "/bank");
        cy.contains("SecureBank").should("exist");
    }
}

export default new BankPage();