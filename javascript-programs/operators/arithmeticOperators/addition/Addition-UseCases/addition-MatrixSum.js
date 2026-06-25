//Write a program to add two matrices element‑wise
let A = [[1,2],[3,4]];
let B = [[5,6],[7,8]];

let result = A.map((row, i) =>
    row.map((val, j) => val + B[i][j])
);

console.log("Matrix Sum:", result);
