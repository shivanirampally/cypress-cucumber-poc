//How do you compare expected vs actual API payload?
let expected = { status: "success", code: 200 };
let actual   = { status: "success", code: 200 };

let match = true;
for (let key in expected) {
    if (expected[key] !== actual[key]) {
        match = false;
        break;
    }
}
console.log(match ? "Payload Match" : "Payload Mismatch");
