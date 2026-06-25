//How do you select environment dynamically?
let env = "QA";
switch(env) {
    case "Dev": console.log("Running in Dev"); break;
    case "QA": console.log("Running in QA"); break;
    case "Staging": console.log("Running in Staging"); break;
    default: console.log("Unknown Environment");
}
