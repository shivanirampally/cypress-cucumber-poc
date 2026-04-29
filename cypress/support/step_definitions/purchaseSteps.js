import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// ================= GIVEN =================

Given('user is logged into SauceDemo', function () {

  // Reuse login command
  cy.login();

  // Verify inventory page
  cy.get('.title')
    .should('be.visible')
    .and('have.text', 'Products');

  // Store fixture as alias
  cy.fixture('checkoutData').as('checkoutData');
});


// ================= WHEN =================

When('user selects the first product', () => {
  cy.get('.inventory_item_name').first().click();
  cy.url().should('include', '/inventory-item.html');
});


When('user adds product to cart', () => {
  cy.get('button.btn_inventory').click();
  cy.get('.shopping_cart_link').click();
  cy.url().should('include', '/cart.html');
});


When('user proceeds to checkout', () => {
  cy.get('#checkout').should('be.visible').click();
});


When('user enters checkout details', function () {

  //Use alias ensures proper sync
  cy.get('@checkoutData').then((data) => {

    cy.get('#first-name').should('be.visible').type(data.firstName);
    cy.get('#last-name').type(data.lastName);
    cy.get('#postal-code').type(data.postalCode);
  });

  cy.get('#continue').click();

  //ensures next steps run
  cy.url().should('include', '/checkout-step-two.html');
});


When('user completes the purchase', () => {
  cy.get('#finish').should('be.visible').click();
});


// ================= THEN =================

Then('order should be placed successfully', () => {

  cy.get('.complete-header')
    .should('be.visible')
    .and('have.text', 'Thank you for your order!');

  cy.get('.complete-text')
    .should('contain', 'Your order has been dispatched');
});


Then('user should return to inventory page', () => {

  cy.get('#back-to-products').should('be.visible').click();

  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('have.text', 'Products');
});