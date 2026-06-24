//Use async/await with readline to add user‑entered numbers
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
    let sum = Number(num1) + Number(num2);
    console.log(`Sum of ${num1} and ${num2} is: ${sum}`);
}

main();
