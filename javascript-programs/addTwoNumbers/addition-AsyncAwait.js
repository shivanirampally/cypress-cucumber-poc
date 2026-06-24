// addition-AsyncAwait.mjs
// Import the readline module (ES Module style)
import readline from "readline";

// Helper function to wrap readline in a Promise
function askQuestion(query) {
    
    // Create a readline interface for input/output
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Return a Promise that resolves with the user's answer
    return new Promise(resolve => rl.question(query, ans => {
        rl.close(); // Close the interface after receiving input
        resolve(ans); // Resolve the Promise with the answer
    }));
}

// Main async function to perform addition
export async function main() {
    
    // Ask for two numbers from the user
    let num1 = await askQuestion("Enter first number: ");
    let num2 = await askQuestion("Enter second number: ");

    // Convert string inputs to numbers
    let a = Number(num1);
    let b = Number(num2);

    // Perform addition
    let sum = a + b;

    // Print the result in a clear format
    console.log(`a(${a}) + b(${b}) = ${sum}`);
}

// Call the main function to run the program
main();
