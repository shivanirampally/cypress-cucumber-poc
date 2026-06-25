// ===============================
// 1. Arrow Function Style
// ===============================
function runArrowModulus() {
    let modulusArrow = (a, b) => a % b;
    let num1 = 29;
    let num2 = 5;
    let resultArrow = modulusArrow(num1, num2);
    console.log("Arrow Function → Remainder:", resultArrow);
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

async function runAsyncModulus() {
    let num1 = await askQuestion("Enter first number: ");
    let num2 = await askQuestion("Enter second number: ");
    let a = Number(num1);
    let b = Number(num2);
    let result = a % b;
    console.log(`Async/Await → a(${a}) % b(${b}) = ${result}`);
}

// ===============================
// 3. Function Declaration Style
// ===============================
function runFunctionModulus() {
    function modulusFunction(a, b) {
        return a % b;
    }
    let resultFunction = modulusFunction(17, 4);
    console.log("Function Declaration → Remainder:", resultFunction);
}

// ===============================
// 4. Direct Operator Usage
// ===============================
function runOperatorModulus() {
    let num3 = 20;
    let num4 = 6;
    let resultOperator = num3 % num4;
    console.log("Operator → Remainder:", resultOperator);
}

// ===============================
// Methods to run each modulus approach
// ===============================
runArrowModulus();
// runAsyncModulus();
// runFunctionModulus();
// runOperatorModulus();
