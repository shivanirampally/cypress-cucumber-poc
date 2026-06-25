// increment-Logic.js

// ===============================
// 1. Arrow Function Style
// ===============================
function runArrowIncrement() {
    let incrementArrow = (a) => ++a;
    let num = 10;
    console.log("Arrow Function → After Increment:", incrementArrow(num));
}

// ===============================
// 2. Async/Await with readline
// ===============================
import readline from "readline";

function askQuestion(query) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => rl.question(query, ans => { rl.close(); resolve(ans); }));
}

async function runAsyncIncrement() {
    let num = await askQuestion("Enter a number: ");
    let a = Number(num);
    console.log(`Async/Await → ${a}++ = ${a + 1}`);
}

// ===============================
// 3. Function Declaration Style
// ===============================
function runFunctionIncrement() {
    function incrementFunction(a) { return a + 1; }
    console.log("Function Declaration →", incrementFunction(15));
}

// ===============================
// 4. Direct Operator Usage
// ===============================
function runOperatorIncrement() {
    let a = 20;
    console.log(`Operator → ${a}++ = ${a + 1}`);
}

// ===============================
// Methods to run each increment approach
// ===============================
runArrowIncrement();
// runAsyncIncrement();
// runFunctionIncrement();
// runOperatorIncrement();
