class DemoAppsPage {
 //================================================
 //DemoAppsPage Locators
 //Topic: Text Locator
 //================================================
pageHeader() {
    return cy.contains("QA Demo Apps");
}   
//Bank demo card 
    bankDemoCard() {
        return cy.contains("a", "Bank Demo App");
    }
    
}

export default new DemoAppsPage();