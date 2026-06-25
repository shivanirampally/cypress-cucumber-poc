//How do you count number of fields in a JSON?
let user = { id: 101, name: "Shivani", role: "QA" };
let count = 0;
for (let key in user) {
    count++;
}
console.log(`Total fields: ${count}`);
