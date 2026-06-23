import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(
    "User validates users using JavaScript concepts",
    () => {

        // Alias
        cy.fixture("loginData")
            .as("userData");

        cy.get("@userData")
            .then((data) => {

                // Array Validation
                expect(data.users)
                    .to.have.length(2);

                // Loop
                data.users.forEach((user, index) => {

                    // Variables
                    const role = user.role;
                    const username = user.username;
                    const password = user.password;

                    cy.log(`User ${index + 1}`);

                    cy.log(`Role : ${role}`);
                    cy.log(`Username : ${username}`);

                    // Conditional Statements
                    if (role === "admin") {

                        cy.log("Admin User Found");

                    } else {

                        cy.log("Viewer User Found");
                    }

                    // String Validation
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