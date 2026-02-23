Cypress.Commands.add('login', function () {

  cy.visit('/');

  cy.get('#user-name').type(Cypress.env('username'));
  cy.get('#password').type(Cypress.env('password'));
  cy.get('#login-button').click();

  cy.url().should('include', '/inventory.html');

});