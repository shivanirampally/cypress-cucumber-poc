//Demonstrate floating‑point precision issues and fix them
console.log(0.1 + 0.2); // 0.30000000000000004

// Fix with toFixed
let sum = 0.1 + 0.2;
console.log("Fixed:", sum.toFixed(2));

// Fix with integer scaling
let scaled = (0.1*10 + 0.2*10)/10;
console.log("Scaled:", scaled);
