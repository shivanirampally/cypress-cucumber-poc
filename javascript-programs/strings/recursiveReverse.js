//Reverse a string using recursion.
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str[0];
}
console.log(reverseString("Engineer"));
