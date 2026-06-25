//Filter only failed test cases.
let results = [
    {id: "TC-101", status: "Pass"},
    {id: "TC-102", status: "Fail"},
    {id: "TC-103", status: "Fail"}
];
let failed = results.filter(tc => tc.status === "Fail");
console.log("Failed Cases:", failed);
