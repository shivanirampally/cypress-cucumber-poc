import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TransferPage from "../../pages/transferPage";

When("User navigates to Transfer Money page", () => {

    TransferPage.openTransferPage();

    TransferPage.verifyTransferPage();

});

When("User enters transfer details", () => {

    cy.fixture("transferData").then(({ standardTransfer }) => {

        TransferPage.transferMoney(standardTransfer);

    });

});

Then("Transfer review popup should be displayed", () => {

    TransferPage.verifyReviewPopup();

});

When("User confirms the transfer", () => {

    TransferPage.confirmTransfer();

});

Then("Transfer should be successful", () => {

    TransferPage.verifyTransferSuccess();

});