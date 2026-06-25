    //Run tests across browsers and environments.
    let browsers = ["Chrome", "Firefox"];
let environments = ["QA", "Staging"];
for (let browser of browsers) {
    for (let env of environments) {
        console.log(`Running tests on ${browser} in ${env}`);
    }
}
