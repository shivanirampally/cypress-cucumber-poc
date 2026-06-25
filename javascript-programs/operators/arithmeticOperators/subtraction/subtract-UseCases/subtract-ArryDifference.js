// Given two arrays of equal length, subtract corresponding elements and return a new array.no
let arr1 = [10, 20, 30];
let arr2 = [5, 15, 25];
let diffArr = arr1.map((val, idx) => val - arr2[idx]);
console.log("Array Difference:", diffArr);
