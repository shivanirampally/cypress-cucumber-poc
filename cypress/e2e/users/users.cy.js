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
            expect(response.status).to.eq(200);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).to.have.length.greaterThan(0);
        });    
    });

    it("Should get single user", function () {

        UsersApi.getSingleUser(this.userData.validUserId)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data.id).to.eq(this.userData.validUserId);
                expect(response.body.data).to.have.property("email");
            });
    });

    it("Should return 404 for invalid user", function () {

        UsersApi.getSingleUser(this.userData.invalidUserId)
            .then((response) => {
                expect(response.status).to.eq(404);
            });
    });
});