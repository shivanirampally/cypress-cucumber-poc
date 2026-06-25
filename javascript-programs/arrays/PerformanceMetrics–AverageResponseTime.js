//Calculate average response time.
let times = [120, 90, 150];
let avg = times.reduce((a, b) => a + b, 0) / times.length;
console.log("Average Response Time:", avg);
