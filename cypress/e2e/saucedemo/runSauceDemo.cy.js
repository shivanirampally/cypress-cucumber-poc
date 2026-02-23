describe('SauceDemo End-to-End Purchase Flow', function () {

  // Runs before every test
  beforeEach(function () {

    // Reusable login
    cy.login();

    // Confirm we are inside inventory page
    cy.get('.title', { timeout: 10000 })
      .should('be.visible')
      .and('have.text', 'Products');

    // Load test data once
    cy.fixture('checkoutData').then(function (data) {
      this.checkoutData = data;
    }.bind(this));

  });

  it('Verify user can successfully purchase a product', function () {

    // Step 1: Open First Product
    cy.get('.inventory_item_name').first().click();

    // Step 2: Verify Product Detail Page
    cy.url().should('include', '/inventory-item.html');

    // Step 3: Add Product to Cart
    cy.get('button.btn_inventory').click();

    // Step 4: Open Cart
    cy.get('.shopping_cart_link').click();

    // Step 5: Verify Cart Page
    cy.url().should('include', '/cart.html');

    // Step 6: Click Checkout
    cy.get('#checkout').click();

    // Step 7: Enter Checkout Information (from fixture)
    cy.get('#first-name').type(this.checkoutData.firstName);
    cy.get('#last-name').type(this.checkoutData.lastName);
    cy.get('#postal-code').type(this.checkoutData.postalCode);

    // Step 8: Continue Checkout
    cy.get('#continue').click();

    // Step 9: Verify Checkout Overview Page
    cy.url().should('include', '/checkout-step-two.html');

    // Step 10: Click Finish Button
    cy.get('#finish').click();

    // Step 11: Verify Order Success Message
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');

    cy.get('.complete-text')
      .should('contain', 'Your order has been dispatched');

    // Step 12: Back to Home
    cy.get('#back-to-products').click();

    // Step 13: Verify User Returned to Inventory Page
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');

  });

});