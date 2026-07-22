class DemoAppsPage {

    // Demo Apps page header
    pageHeader() {
        return cy.contains("QA Demo Apps");
    }

    // Bank Demo App card
    bankDemoCard() {
        return cy.contains("a", "Bank Demo App");
    }

}

export default new DemoAppsPage();