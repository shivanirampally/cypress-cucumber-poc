import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";
import BankPage from "../../pages/demoAppsPage";

// Launch QA Playground application
Given("User opens QA Playground website", () => {
  cy.log("Launching QA Playground application");
  cy.visit("/");
});

// Verify Home Page is displayed successfully
Then("Home page header should be displayed", () => {
  cy.log("Verifying Home Page Header");
  HomePage.homePageHeader()
    .should("be.visible")
    .and("contain.text", "The Only")
    .and("contain.text", "Automation")
    .and("contain.text", "Playground")
    .and("contain.text", "Need to Practice");
  cy.log("Home Page Header verified successfully");
       
});

//Verify Home Page navigation menu items are displayed successfully
Then ("Navigation menu should be displayed",() =>{
  cy.log("Verifying Home Page Navigation Menu Items");
  for ( const menu of HomePage.navigationMenus) {
    cy.log(`Verifying '${menu.name}' menu`);
    HomePage.navigationMenu(menu)
            .should("be.visible")
            .and("contain.text", menu.name);
    cy.log(`'${menu.name}' menu verified successfully`);        
  }
});

//Click on Demo apps menu item
When("User clicks on Demo Apps menu",()=>{
  cy.log("Clicking 'Demo Apps' menu");
  const demoApps = HomePage.navigationMenus.find(
    (menu) => menu.name === "Demo Apps"
  );
  HomePage.navigationMenu(demoApps)
          .click();
});

//verify demo apps page navigation
Then ("Demo Apps page should be displayed",()=>{
  cy.log("Verifying Demo Apps page");
  cy.url()
    .should("include", "/demo");
  BankPage.pageHeader()
          .should("be.visible")
          .and("contain.text", "QA Demo Apps");
});