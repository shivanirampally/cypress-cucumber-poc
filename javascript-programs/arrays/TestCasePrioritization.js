//Sort test cases by priority.
let testCases = [
    {id: "TC-101", priority: 3},
    {id: "TC-102", priority: 1},
    {id: "TC-103", priority: 2}
];
testCases.sort((a, b) => a.priority - b.priority);
console.log(testCases);
