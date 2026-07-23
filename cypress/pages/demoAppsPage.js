class DemoAppsPage {

    pageHeader() {
        return cy.contains("QA Demo Apps");
    }

    bankDemoCard() {
        return cy.contains("a", "Bank Demo App");
    }

    openBankDemoApp() {
        this.bankDemoCard()
            .should("be.visible")
            .invoke("removeAttr", "target")
            .click();
    }
}

export default new DemoAppsPage();