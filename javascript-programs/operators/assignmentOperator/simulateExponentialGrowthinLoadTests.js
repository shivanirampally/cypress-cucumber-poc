//How do you model user growth doubling each cycle?
let users = 10;
for (let cycle = 1; cycle <= 5; cycle++) {
    users **= 2;
    console.log(`Cycle ${cycle}: ${users} users`);
}
