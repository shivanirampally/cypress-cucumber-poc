//Check if form fields are empty.
let fields = { username: "Shivani", password: "" };
for (let key in fields) {
    console.log(fields[key] === "" ? `${key} is empty` : `${key} is filled`);
}
