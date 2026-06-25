// Sort strings ignoring case.
let items = ["banana", "Apple", "cherry"];
items.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Case‑Insensitive Sort:", items);
