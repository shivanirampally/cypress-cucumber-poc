//Perform multiplication of two 2x2 matrices.
// multiplication-matrix.js
let A = [[1, 2], [3, 4]];
let B = [[2, 0], [1, 2]];
let result = [
    [A[0][0]*B[0][0] + A[0][1]*B[1][0], A[0][0]*B[0][1] + A[0][1]*B[1][1]],
    [A[1][0]*B[0][0] + A[1][1]*B[1][0], A[1][0]*B[0][1] + A[1][1]*B[1][1]]
];
console.log("Matrix Multiplication Result:", result);
