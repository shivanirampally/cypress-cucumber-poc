//Compute (𝑎+𝑏)𝑛 directly using exponential operator.
let a = 2, b = 3, n = 4;
let result = 0;
for (let k = 0; k <= n; k++) {
    let coeff = factorial(n)/(factorial(k)*factorial(n-k));
    result += coeff * (a ** (n-k)) * (b ** k);
}
console.log("(2+3)^4 =", result);
