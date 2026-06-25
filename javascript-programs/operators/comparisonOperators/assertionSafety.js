//How do you catch mismatched data types in test assertions?

let status = "active";
console.log(status != true);   // true
console.log(status !== true);  // true → safer
