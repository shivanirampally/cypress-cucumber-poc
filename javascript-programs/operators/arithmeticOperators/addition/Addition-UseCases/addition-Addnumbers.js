//Write a program to add two numbers provided by the user using readline.  
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        let sum = Number(num1) + Number(num2);
        console.log(`Sum of ${num1} and ${num2} is: ${sum}`);
        rl.close();
    });
});
