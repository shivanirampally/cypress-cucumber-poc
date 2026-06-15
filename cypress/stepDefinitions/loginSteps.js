import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

Given("User launches nopCommerce application", () => {

    LoginPage.navigateToLoginPage();

});

Given("User completes Cloudflare verification manually", () => {

    cy.log("Complete Cloudflare verification manually");

    cy.pause();

});