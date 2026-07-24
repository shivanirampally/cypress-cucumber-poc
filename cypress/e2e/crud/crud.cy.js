import UsersApi from "../../api/usersApi";

describe("CRUD API", () => {

    beforeEach(function () {
        cy.fixture("userData").as("userData");
    });

    // Test case for creating a new user
    it("Should create a new user", function () {
        UsersApi.createUser(this.userData.createUser)
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.name)
                    .to.eq(this.userData.createUser.name);
                expect(response.body.job)
                    .to.eq(this.userData.createUser.job);
                expect(response.body)
                    .to.have.property("id")
                expect(response.body)
                    .to.have.property("createdAt");
            }
        );

    });

    // Test case for updating an existing user
    it("Should update existing user", function () {

        UsersApi.updateUser(2,
            this.userData.updateUser
        ).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.name)
                .to.eq(this.userData.updateUser.name);
            expect(response.body.job)
                .to.eq(this.userData.updateUser.job);
            expect(response.body)
                .to.have.property("updatedAt");
        });

    });

    // Test case for patching an existing user
        it("Should partially update user", function () {

        UsersApi.patchUser(2,
            {
                job: "Automation Engineer"
            }
        ).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.job)
                .to.eq("Automation Engineer");
        });
    });

    // Test case for deleting an existing user
        it("Should delete user", () => {

        UsersApi.deleteUser(2)
         .then((response) => {
                expect(response.status).to.eq(204);
         });
    });
});