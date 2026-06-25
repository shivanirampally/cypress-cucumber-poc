//How do you assign test runs round‑robin across environments?
let environments = ["Dev", "QA", "Staging"];
for (let i = 0; i < 6; i++) {
    console.log(`Run ${i+1} → ${environments[i % environments.length]}`);
}
