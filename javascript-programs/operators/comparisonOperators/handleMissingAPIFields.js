//?? → Handle Missing API Fields
//How do you handle undefined JSON keys?
let response = { user: null };
let username = response.user ?? "Guest";
console.log(`User: ${username}`);
