Cypress.Commands.add("loginMicrosoft", () => {

  cy.session("chorus-token-session", () => {

    // ✅ FIX: use full URL to avoid baseUrl prefix
    cy.visit("about:blank", { failOnStatusCode: false });

    cy.window().then((win) => {

      const sessionStorage = win.sessionStorage;

      sessionStorage.setItem("access_token", Cypress.env("access_token"));
      sessionStorage.setItem("id_token", Cypress.env("id_token"));
      sessionStorage.setItem("session_state", Cypress.env("session_state"));

      if (Cypress.env("id_token_claims_obj")) {
        sessionStorage.setItem(
          "id_token_claims_obj",
          Cypress.env("id_token_claims_obj")
        );
      }

      sessionStorage.setItem("expires_at", Date.now() + 3600 * 1000);
      sessionStorage.setItem("access_token_stored_at", Date.now());
      sessionStorage.setItem("id_token_stored_at", Date.now());
    });

    // ✅ Now open actual app
    cy.visit("/", { failOnStatusCode: false });

  });

});