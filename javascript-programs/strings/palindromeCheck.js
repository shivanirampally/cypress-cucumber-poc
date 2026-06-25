// palindromeCheck.js

let input = "madam";
let isPalindrome = input === input.split("").reverse().join("");
console.log(isPalindrome ? "Palindrome" : "Not Palindrome");
