//Validate response times against SLA.
let responseTimes = [120, 90, 150];
for (let time of responseTimes) {
    console.log(time <= 100 ? "Within SLA" : "SLA Breach");
}
