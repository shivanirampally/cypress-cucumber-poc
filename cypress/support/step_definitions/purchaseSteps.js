import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// GIVEN
Given('user is logged into SauceDemo', () => {
  cy.login();
});

// WHEN → LOOP + CONDITION
When('user adds multiple products to cart', () => {
  cy.get('.inventory_item').each(($el, index) => {
    if (index < 2) {   // condition
      cy.wrap($el).contains('Add to cart').click();
    }
  });
});

// Navigate to cart
When('user navigates to cart', () => {
  cy.get('.shopping_cart_link').click();
  cy.url().should('include', '/cart.html');
});

// Checkout
When('user proceeds to checkout', () => {
  cy.get('#checkout').click();
});

// Enter details
When('user enters checkout details', () => {
  cy.get('#first-name').type('Shivani');
  cy.get('#last-name').type('QA');
  cy.get('#postal-code').type('500001');
  cy.get('#continue').click();
});

// Complete purchase
When('user completes the purchase', () => {
  cy.get('#finish').click();
});

// THEN
Then('order should be placed successfully', () => {
  cy.contains('Thank you for your order').should('be.visible');
});

// CONDITION VALIDATION
Then('user should see order confirmation page', () => {
  cy.url().should('include', 'checkout-complete');
});