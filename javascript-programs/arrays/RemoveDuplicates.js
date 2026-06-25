//How do you remove duplicates from an array?
let arr = ["QA", "QA", "Automation", "Engineer", "Automation"];
let unique = [...new Set(arr)];
console.log("Unique:", unique);
