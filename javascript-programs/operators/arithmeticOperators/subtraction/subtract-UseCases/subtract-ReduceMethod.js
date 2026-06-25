//Use the reduce() method to subtract all elements of an array sequentially.
let numbers = [100, 20, 10];
let result = numbers.reduce((acc, val) => acc - val);
console.log("Reduce → Subtraction Result:", result);