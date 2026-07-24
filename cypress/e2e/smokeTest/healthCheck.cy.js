describe("Framework Health Check", () => {

    it("Should verify ReqRes API is reachable", () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
            headers: {
                "x-api-key": Cypress.env("apiKey")
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length.greaterThan(0);
        });

    });

});