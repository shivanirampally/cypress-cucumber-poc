//Distribute paper sets among students using modulus.
let students = 80;
let paperSets = 5;

for (let i = 1; i <= students; i++) {
    let assignedSet = i % paperSets === 0 ? paperSets : i % paperSets;
    console.log(`Student ${i} → Paper Set ${assignedSet}`);
}
