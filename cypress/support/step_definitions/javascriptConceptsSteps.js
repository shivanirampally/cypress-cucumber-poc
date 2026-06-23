import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Demonstrate JavaScript concepts used in Cypress automation
When(
    "User validates users using JavaScript concepts",
    () => {

        //Store fixture data using Cypress alias
        cy.fixture("loginData")
            .as("userData");

        cy.get("@userData")
            .then((data) => {

                //Validate users array length
                expect(data.users)
                    .to.have.length(2);

                //Iterate through all users using loop
                data.users.forEach((user, index) => {

                    //Store user details in variables
                    const role = user.role;
                    const username = user.username;
                    const password = user.password;

                    cy.log(`User ${index + 1}`);

                    cy.log(`Role : ${role}`);
                    cy.log(`Username : ${username}`);

                    //Demonstrate conditional statements
                    if (role === "admin") {

                        cy.log("Admin User Found");

                    } else {

                        cy.log("Viewer User Found");
                    }

                    //Validate string data type
                    expect(username)
                        .to.be.a("string");

                    expect(password)
                        .to.be.a("string");
                });
            });
    }
);

Then(
    "JavaScript concepts validation should complete",
    () => {

        cy.log(
            "Variables, Arrays, Loops, Conditions, Aliases and Strings validated successfully"
        );
    }
);