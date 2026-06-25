//How do you validate multiple API response times?
let responseTimes = [120, 90, 150];
for (let time of responseTimes) {
    console.log(time <= 100 ? "Within SLA" : "SLA Breach");
}
