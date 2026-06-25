// division-Logic.js

// ===============================
// 1. Arrow Function Style
// ===============================
function runArrowDivision() {
    let divisionArrow = (a, b) => a / b;
    let num1 = 50;
    let num2 = 5;
    console.log("Arrow Function → Quotient:", divisionArrow(num1, num2));
}

// ===============================
// 2. Async/Await with readline
// ===============================
import readline from "readline";

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
}

async function runAsyncDivision() {
    let num1 = await askQuestion("Enter dividend: ");
    let num2 = await askQuestion("Enter divisor: ");
    let a = Number(num1);
    let b = Number(num2);
    console.log(`Async/Await → ${a} / ${b} = ${a / b}`);
}

// ===============================
// 3. Function Declaration Style
// ===============================
function runFunctionDivision() {
    function divisionFunction(a, b) {
        return a / b;
    }
    console.log("Function Declaration → Quotient:", divisionFunction(100, 20));
}

// ===============================
// 4. Direct Operator Usage
// ===============================
function runOperatorDivision() {
    let a = 36, b = 6;
    console.log(`Operator → ${a} / ${b} = ${a / b}`);
}

// ===============================
// Methods to run each division approach
// ===============================
runArrowDivision();
// runAsyncDivision();
// runFunctionDivision();
// runOperatorDivision();
