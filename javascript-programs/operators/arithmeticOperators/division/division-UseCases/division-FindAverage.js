//Find the average of an array using division.
let arr = [10, 20, 30, 40];
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log("Average:", sum / arr.length);
