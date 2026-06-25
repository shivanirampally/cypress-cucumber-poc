//Rotate an array by k positions using modulus.
let arr = [1, 2, 3, 4, 5];
let k = 2;
let rotated = arr.map((_, i) => arr[(i + k) % arr.length]);
console.log("Rotated Array:", rotated);
