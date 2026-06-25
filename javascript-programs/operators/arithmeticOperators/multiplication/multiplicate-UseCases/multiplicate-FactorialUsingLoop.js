//Find the factorial of a number using multiplication in a loop.
// multiplication-factorial.js
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`Factorial of ${n} = ${factorial}`);
