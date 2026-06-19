class BankPage {

    openBankAppButton() {
        return cy.contains("Open Bank App");
    }

    clickOpenBankApp() {
        this.openBankAppButton()
            .scrollIntoView()
            .should("be.visible")
            .click();
    }

    verifyBankPageLoaded() {
        cy.url().should("include", "/bank");
        cy.contains("SecureBank").should("exist");
    }
}

export default new BankPage();