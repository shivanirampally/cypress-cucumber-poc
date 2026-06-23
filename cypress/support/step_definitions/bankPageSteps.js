import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BankPage from "../../pages/bankPage";

// Scroll to Bank Demo section on QA Playground home page
When("User scrolls to Bank Demo section", () => {
    BankPage.openBankAppButton()
      .scrollIntoView();
});

// Verify Open Bank App button is displayed
Then("Open Bank App button should be visible", () => {

    BankPage.openBankAppButton()
      .should("be.visible");
});

// Open Secure Bank application
When("User clicks on Open Bank App button", () => {

    BankPage.clickOpenBankApp();
});

// Verify Secure Bank page loaded successfully
Then("User should be navigated to Secure Bank Demo page", () => {

    BankPage.verifyBankPageLoaded();
});