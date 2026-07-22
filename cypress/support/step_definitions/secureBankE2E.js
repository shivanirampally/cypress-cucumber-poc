import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import bankPage from "../../pages/demoAppsPage";

// Navigate from QA Playground home page to Secure Bank application
When("User navigates to Secure Bank application", () => {

    bankPage.clickOpenBankApp();

    bankPage.verifyBankPageLoaded();
});