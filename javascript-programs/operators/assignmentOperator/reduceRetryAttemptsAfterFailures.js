//How do you decrement retry attempts after each failed run?
let retries = 3;
while (retries > 0) {
    console.log(`Retrying... Attempts left: ${retries}`);
    retries -= 1;
}
console.log("No retries left, mark test as failed.");
