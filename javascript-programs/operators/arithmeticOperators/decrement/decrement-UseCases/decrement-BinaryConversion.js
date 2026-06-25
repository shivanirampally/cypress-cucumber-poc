//Convert a number to binary using decrement logic.
let num = 13;
let binary = "";
while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
}
console.log("Binary:", binary);
    