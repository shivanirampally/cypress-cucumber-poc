import "./commands";
import "cypress-xpath";

// Ignore known React rendering exception thrown by QA Playground.
// This application-side issue should not fail automation execution.

Cypress.on("uncaught:exception", (err) => {
    if (err.message.includes("Minified React error #418")) {
        return false;
    }
});