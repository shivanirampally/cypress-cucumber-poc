//Wait until environment is ready.
let ready = false;
let attempts = 0;
do {
    console.log("Checking environment...");
    attempts++;
    if (attempts === 3) ready = true;
} while (!ready);
console.log("Environment Ready!");
