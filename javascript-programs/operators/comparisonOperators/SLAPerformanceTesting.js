//How do you validate response times against SLA?
let responseTime = 120; // ms
let SLA = 100;
console.log(responseTime > SLA ? "SLA Breach" : "Within SLA");
