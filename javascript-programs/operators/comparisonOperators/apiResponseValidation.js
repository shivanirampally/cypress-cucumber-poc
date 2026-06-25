//How do you ensure API response type correctness?
let responseCode = "200"; // string from API
console.log(responseCode == 200);   // true → loose equality
console.log(responseCode === 200);  // false → strict equality
