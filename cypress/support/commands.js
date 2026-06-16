Cypress.Commands.add("loginMicrosoft", () => {

  cy.session("chorus-session", () => {

 cy.visit("/", {
      failOnStatusCode: false
    });
    
    cy.window().then((win) => {

      win.sessionStorage.setItem(
        "access_token",
        Cypress.env("access_token")
      );

      win.sessionStorage.setItem(
        "id_token",
        Cypress.env("id_token")
      );

      win.sessionStorage.setItem(
        "session_state",
        Cypress.env("session_state")
      );

      win.sessionStorage.setItem(
        "nonce",
        Cypress.env("nonce")
      );

      win.sessionStorage.setItem(
        "granted_scopes",
        Cypress.env("granted_scopes")
      );

      win.sessionStorage.setItem(
        "id_token_claims_obj",
        Cypress.env("id_token_claims_obj")
      );

      win.sessionStorage.setItem(
        "access_token_stored_at",
        Cypress.env("access_token_stored_at")
      );

      win.sessionStorage.setItem(
        "id_token_stored_at",
        Cypress.env("id_token_stored_at")
      );

      win.sessionStorage.setItem(
        "expires_at",
        Cypress.env("expires_at")
      );

      win.sessionStorage.setItem(
        "id_token_expires_at",
        Cypress.env("id_token_expires_at")
      );

    });

  });

  cy.visit("/");
});