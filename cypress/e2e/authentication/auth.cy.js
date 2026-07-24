import AuthApi from "../../api/authApi";

describe("Authentication API", () => {
    beforeEach(function () {
        cy.fixture("authData").as("authData");
    });

    it("Should login successfully", function () {
        AuthApi.login(this.authData.validLogin)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property("token");
            });
        }
    );

});