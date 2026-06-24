async function subtractAsync(a, b) {
    return a - b;
}

async function main() {
    let result = await subtractAsync(50, 18);
    console.log(`Async/Await: 50 - 18 = ${result}`);
}
main();
