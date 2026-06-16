class LoginPage {

    navigateToLoginPage() {

        cy.visit('/', {
            failOnStatusCode: false
        });

    }

}

export default new LoginPage();