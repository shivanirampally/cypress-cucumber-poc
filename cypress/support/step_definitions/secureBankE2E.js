import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import bankPage from "../../pages/bankPage";


When("User navigates to Secure Bank application", () => {

    bankPage.clickOpenBankApp();

    bankPage.verifyBankPageLoaded();
});
