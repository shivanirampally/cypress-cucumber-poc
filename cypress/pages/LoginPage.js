class LoginPage {

  navigateToLoginPage() {
    cy.visit("/", {
      failOnStatusCode: false
    });
  }

  verifyHomePage() {
    cy.contains("Log in", { timeout: 60000 })
      .should("be.visible");
  }

}

export default new LoginPage();