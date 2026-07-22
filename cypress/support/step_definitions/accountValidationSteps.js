import LoginPage from "../../pages/loginPage";
import { Then } from "@badeball/cypress-cucumber-preprocessor";

// Validate account behaviour with Switch case

Then(
    "{string} account should be validated",
    (account) => {
        const accountType = account.trim();
        cy.log(`Validating account: ${accountType}`);

        switch (accountType) {
            case "standard_user":
            case "frozen_user":
            case "overdraft_user":
            case "slow_user":
            case "error_user":
            case "admin_user":
                LoginPage.verifyDashboard();
                LoginPage.logout();
                break;

            case "locked_user":
                cy.contains("locked")
                    .should("be.visible");
                break;

            default:
                throw new Error(
                    `Unsupported account: ${accountType}`
                );
        }

    }
);