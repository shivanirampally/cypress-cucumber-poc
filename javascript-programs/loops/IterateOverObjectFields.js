//How do you check if form fields are empty?
let form = { username: "Shivani", password: "" };
for (let field in form) {
    console.log(form[field] === "" ? `${field} is empty` : `${field} is filled`);
}
