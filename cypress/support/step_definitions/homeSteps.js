import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";
import DemoAppsPage from "../../pages/demoAppsPage";

// Open QA Playground
Given("User opens QA Playground website", () => {
    cy.visit("/");
});

// Verify Home page
Then("Home page header should be displayed", () => {
    HomePage.homePageHeader()
        .should("be.visible")
        .and("contain.text", "The Only")
        .and("contain.text", "Automation")
        .and("contain.text", "Playground")
        .and("contain.text", "Need to Practice");
});

// Verify navigation menu
Then("Navigation menu should be displayed", () => {
    for (const menu of HomePage.navigationMenus) {
        HomePage.navigationMenu(menu)
            .should("be.visible")
            .and("contain.text", menu.name);
    }
});

// Open Demo Apps
When("User clicks on Demo Apps menu", () => {
    cy.get('a[href="/demo"]')
        .then(($link) => {
            $link[0].click();
        });
});
