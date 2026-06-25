//Implement circular indexing using modulus.
let queue = [10, 20, 30, 40];
let front = 0;
let size = queue.length;

for (let i = 0; i < 10; i++) {
    console.log(`Access index ${i} → ${queue[i % size]}`);
}
