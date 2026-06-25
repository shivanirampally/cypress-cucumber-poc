//Generate array of 5 user IDs.
let users = Array.from({length: 5}, (_, i) => `User-${i+1}`);
console.log(users);
