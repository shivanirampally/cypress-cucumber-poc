//Identify test cases exceeding threshold.
let cpuUsage = [70, 85, 95];
let risky = cpuUsage.filter(val => val > 90);
console.log("Critical Risks:", risky);
