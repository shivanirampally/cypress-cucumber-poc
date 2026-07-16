import "./commands";
import "cypress-xpath";


// Ignore known React exception thrown by QA Playground.
// The exception occurs during page rendering under Cypress
// and is not caused by the automation framework.
Cypress.on("uncaught:exception", (err) => {

    if (err.message.includes("Minified React error #418")) {
        return false;
    }

});