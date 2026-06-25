//Assign items to buckets using modulus.
let items = 12;
let buckets = 4;

for (let i = 0; i < items; i++) {
    console.log(`Item ${i} → Bucket ${i % buckets}`);
}
