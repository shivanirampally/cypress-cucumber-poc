//Ensure all required fields are filled.
let fields = ["username", "password", ""];
let allFilled = fields.every(field => field !== "");
console.log(allFilled ? "Form Valid" : "Form Invalid");
