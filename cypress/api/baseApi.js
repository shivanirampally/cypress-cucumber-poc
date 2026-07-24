class BaseApi {

    sendRequest(method, endpoint, body = null, headers = {}) {

        return cy.request({
            method,
            url: endpoint,
            headers: {
                "x-api-key": Cypress.env("apiKey"),
                ...headers
            },
            body,
            failOnStatusCode: false
        });

    }

}

export default new BaseApi();