//How do you adjust execution time when environment slows down?
let baseTime = 10; // seconds
let slowNetworkFactor = 3;
baseTime *= slowNetworkFactor;
console.log(`Adjusted Execution Time: ${baseTime} seconds`);
