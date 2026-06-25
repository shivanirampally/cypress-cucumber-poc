//Write a program that takes two numbers from the user and prints their difference.
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

async function main() {
    let num1 = await askQuestion("Enter first number: ");
    let num2 = await askQuestion("Enter second number: ");
    let a = Number(num1);
    let b = Number(num2);
    console.log(`User Input → ${a} - ${b} = ${a - b}`);
}
main();