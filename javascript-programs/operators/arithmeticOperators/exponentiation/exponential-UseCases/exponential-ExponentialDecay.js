//Model radioactive decay or depreciation using exponential.
let value = 100;
for (let i = 1; i <= 5; i++) {
    console.log(`Step ${i}: ${value * (0.5 ** i)}`);
}
