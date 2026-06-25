//Implement subtraction using recursion (e.g., subtract 4 from 10 by repeated decrements)
function recursiveSubtract(a, b) {
    if (b === 0) return a;
    return recursiveSubtract(a - 1, b - 1);
}
console.log("Recursive Subtraction: 10 - 4 =", recursiveSubtract(10, 4));