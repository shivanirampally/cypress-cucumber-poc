// ===============================
// 1. Arrow Function Style
// ===============================
function runArrowAddition() {
    let additionArrow = (a, b) => a + b;
    let num1 = 25;
    let num2 = 25;
    let sumArrow = additionArrow(num1, num2);
    console.log("Arrow Function → Sum:", sumArrow);
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

async function runAsyncAddition() {
    let num1 = await askQuestion("Enter first number: ");
    let num2 = await askQuestion("Enter second number: ");
    let a = Number(num1);
    let b = Number(num2);
    let sum = a + b;
    console.log(`Async/Await → a(${a}) + b(${b}) = ${sum}`);
}

// ===============================
// 3. Function Declaration Style
// ===============================
function runFunctionAddition() {
    function additionFunction(a, b) {
        return a + b;
    }
    let sumFunction = additionFunction(5, 10);
    console.log("Function Declaration → Sum:", sumFunction);
}

// ===============================
// 4. Direct Operator Usage
// ===============================
function runOperatorAddition() {
    let num3 = 10;
    let num4 = 10;
    let sumOperator = num3 + num4;
    console.log("Operator → Sum:", sumOperator);
}


// methods to run each addition approach
runArrowAddition();
// runAsyncAddition();
// runFunctionAddition();
// runOperatorAddition();
