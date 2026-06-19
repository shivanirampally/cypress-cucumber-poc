import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BankPage from "../../pages/bankPage";

When("User scrolls to Bank Demo section", () => {

    BankPage.openBankAppButton()
      .scrollIntoView();
});

Then("Open Bank App button should be visible", () => {

    BankPage.openBankAppButton()
      .should("be.visible");
});

When("User clicks on Open Bank App button", () => {

    BankPage.clickOpenBankApp();
});

Then("User should be navigated to Secure Bank Demo page", () => {

    BankPage.verifyBankPageLoaded();
});