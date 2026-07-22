/**js topics covered
Variables (const)
trim()
Template Literals
if / else
return
Functions
String methods**/

import LoginPage from "../../pages/loginPage";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Enter login credentials
When(
    "User enters username {string} and password {string}",
    (username, password) => {
        const enteredUsername = username.trim();
        const enteredPassword = password.trim();

        cy.log(`Attempting login with user: ${enteredUsername || "Empty Username"}`);

        LoginPage.login(
            enteredUsername,
            enteredPassword
        );
    }
);

// Verify login result
Then(
    "Login result should be {string}",
    (result) => {
        const loginResult = result.toLowerCase();
        if (loginResult === "success") {
            LoginPage.verifyDashboard();
            LoginPage.logout();
            return;
        }
        
        LoginPage.verifyLoginPage();

    }
);