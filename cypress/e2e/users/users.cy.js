import UsersApi from "../../api/usersApi";

describe("Users API", () => {

    beforeEach(function () {
        cy.fixture("userData").as("userData");
    });

    it("Should get all users", () => {

        cy.log("Fetching list of users");

        UsersApi.getUsers()
            .then((response) => {

                cy.log(`Response Status : ${response.status}`);
                // Status Code Validation
                expect(response.status).to.eq(200);

                // Header Validation
                expect(response.headers["content-type"])
                    .to.include("application/json");

                // Response Time Validation
                expect(response.duration)
                    .to.be.lessThan(3000);

                // Response Body Validation
                expect(response.body.page).to.eq(2);
                expect(response.body.data)
                    .to.have.length.greaterThan(0);

            });

    });

    it("Should get single user", function () {

        cy.log(`Fetching user with ID : ${this.userData.validUserId}`);

        UsersApi.getSingleUser(this.userData.validUserId)
            .then((response) => {

                cy.log(`Response Status : ${response.status}`);

                // Status Code Validation
                expect(response.status).to.eq(200);

                // Header Validation
                expect(response.headers["content-type"])
                    .to.include("application/json");

                // Response Time Validation
                expect(response.duration)
                    .to.be.lessThan(3000);

                // Response Body Validation
                expect(response.body.data.id)
                    .to.eq(this.userData.validUserId);

                expect(response.body.data)
                    .to.have.property("email");

                expect(response.body.data)
                    .to.have.property("first_name");

                expect(response.body.data)
                    .to.have.property("last_name");

            });

    });

    it("Should return 404 for invalid user", function () {

        cy.log(`Fetching invalid user with ID : ${this.userData.invalidUserId}`);

        UsersApi.getSingleUser(this.userData.invalidUserId)
            .then((response) => {

                cy.log(`Response Status : ${response.status}`);

                // Status Code Validation
                expect(response.status).to.eq(404);

                // Response Time Validation
                expect(response.duration)
                    .to.be.lessThan(3000);

                // Response Body Validation
                expect(response.body).to.deep.equal({});

            });

    });

});