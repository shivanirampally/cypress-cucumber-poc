// ===============================
// 1. Arrow Function Style
// ===============================
function runArrowSubtraction() {
    let subtractionArrow = (a, b) => a - b;
    let num1 = 25;
    let num2 = 7;
    let resultArrow = subtractionArrow(num1, num2);
    console.log("Arrow Function → Difference:", resultArrow);
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

async function runAsyncSubtraction() {
    let num1 = await askQuestion("Enter first number: ");
    let num2 = await askQuestion("Enter second number: ");
    let a = Number(num1);
    let b = Number(num2);
    let result = a - b;
    console.log(`Async/Await → a(${a}) - b(${b}) = ${result}`);
}

// ===============================
// 3. Function Declaration Style
// ===============================
function runFunctionSubtraction() {
    function subtractionFunction(a, b) {
        return a - b;
    }
    let resultFunction = subtractionFunction(15, 5);
    console.log("Function Declaration → Difference:", resultFunction);
}

// ===============================
// 4. Direct Operator Usage
// ===============================
function runOperatorSubtraction() {
    let num3 = 10;
    let num4 = 4;
    let resultOperator = num3 - num4;
    console.log("Operator → Difference:", resultOperator);
}

// ===============================
// Methods to run each subtraction approach
// ===============================
runArrowSubtraction();
// runAsyncSubtraction();
// runFunctionSubtraction();
// runOperatorSubtraction();
