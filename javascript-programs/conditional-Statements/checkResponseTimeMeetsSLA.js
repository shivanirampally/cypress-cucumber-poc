//How do you check if response time meets SLA?
let responseTime = 120;
if (responseTime <= 100) {
    console.log("Within SLA");
} else {
    console.log("SLA Breach");
}
