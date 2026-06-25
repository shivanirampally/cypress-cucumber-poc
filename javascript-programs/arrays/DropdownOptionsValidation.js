//Validate dropdown options are sorted alphabetically.
let options = ["Apple", "Banana", "Cherry"];
let sorted = [...options].sort();
console.log(options.join() === sorted.join() ? "Dropdown Sorted" : "Dropdown Not Sorted");
