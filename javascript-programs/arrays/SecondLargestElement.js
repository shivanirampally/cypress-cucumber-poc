//How do you find the second largest number in an array?
let arr = [10, 25, 3, 99, 45];
arr.sort((a, b) => b - a);
console.log("Second Largest:", arr[1]);
