//Multiply all elements of an array together.
// multiplication-arrayProduct.js
let arr = [2, 3, 4];
let product = arr.reduce((acc, val) => acc * val, 1);
console.log("Array Product:", product);
