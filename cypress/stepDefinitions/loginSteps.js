import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

Given("User launches nopCommerce application", () => {
  LoginPage.navigateToLoginPage();
});

Then("Home page should be displayed", () => {
  LoginPage.verifyHomePage();
});