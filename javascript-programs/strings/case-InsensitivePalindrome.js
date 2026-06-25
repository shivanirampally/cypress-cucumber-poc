function checkPalindrome(str) {
    let normalized = str.toLowerCase();
    return normalized === normalized.split("").reverse().join("");
}
console.log(checkPalindrome("Madam") ? "Palindrome" : "Not Palindrome");
