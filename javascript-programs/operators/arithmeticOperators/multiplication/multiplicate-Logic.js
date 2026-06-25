// ===============================
// 1. Arrow Function Style
// ===============================
function runArrowMultiplication() {
    let multiplicationArrow = (a, b) => a * b;
    let num1 = 6;
    let num2 = 7;
    let resultArrow = multiplicationArrow(num1, num2);
    console.log("Arrow Function → Product:", resultArrow);
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

async function runAsyncMultiplication() {
    let num1 = await askQuestion("Enter first number: ");
    let num2 = await askQuestion("Enter second number: ");
    let a = Number(num1);
    let b = Number(num2);
    let product = a * b;
    console.log(`Async/Await → a(${a}) * b(${b}) = ${product}`);
}

// ===============================
// 3. Function Declaration Style
// ===============================
function runFunctionMultiplication() {
    function multiplicationFunction(a, b) {
        return a * b;
    }
    let resultFunction = multiplicationFunction(8, 9);
    console.log("Function Declaration → Product:", resultFunction);
}

// ===============================
// 4. Direct Operator Usage
// ===============================
function runOperatorMultiplication() {
    let num3 = 12;
    let num4 = 4;
    let resultOperator = num3 * num4;
    console.log("Operator → Product:", resultOperator);
}

// ===============================
// Methods to run each multiplication approach
// ===============================
runArrowMultiplication();
// runAsyncMultiplication();
// runFunctionMultiplication();
// runOperatorMultiplication();
