//How do you validate config values?
let config = { baseUrl: "https://qa.com", retries: 3, timeout: 5000 };
for (let key in config) {
    console.log(`${key}: ${config[key]}`);
}
