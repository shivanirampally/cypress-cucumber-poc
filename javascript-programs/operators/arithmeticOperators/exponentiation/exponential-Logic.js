// exponential-Logic.js

// ===============================
// 1. Arrow Function Style
// ===============================
function runArrowExponential() {
    let powerArrow = (a, b) => a ** b;
    console.log("Arrow Function → 2^5 =", powerArrow(2, 5));
}

// ===============================
// 2. Async/Await with readline
// ===============================
import readline from "readline";

function askQuestion(query) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => rl.question(query, ans => { rl.close(); resolve(ans); }));
}

async function runAsyncExponential() {
    let base = await askQuestion("Enter base: ");
    let exp = await askQuestion("Enter exponent: ");
    let a = Number(base), b = Number(exp);
    console.log(`Async/Await → ${a}^${b} = ${a ** b}`);
}

// ===============================
// 3. Function Declaration Style
// ===============================
function runFunctionExponential() {
    function powerFunction(a, b) { return a ** b; }
    console.log("Function Declaration → 3^4 =", powerFunction(3, 4));
}

// ===============================
// 4. Direct Operator Usage
// ===============================
function runOperatorExponential() {
    let a = 5, b = 3;
    console.log(`Operator → ${a}^${b} = ${a ** b}`);
}

// ===============================
// Methods to run each exponential approach
// ===============================
runArrowExponential();
// runAsyncExponential();
// runFunctionExponential();
// runOperatorExponential();
