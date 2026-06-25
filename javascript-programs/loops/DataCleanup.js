//Remove logs until empty.
let logs = ["Error1", "Error2", "Error3"];
while (logs.length > 0) {
    console.log("Removing:", logs.pop());
}
