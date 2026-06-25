//Rotate [1,2,3,4,5] by 2 positions.
let arr = [1,2,3,4,5];
let k = 2;
let rotated = arr.slice(k).concat(arr.slice(0, k));
console.log(rotated); // [3,4,5,1,2]
