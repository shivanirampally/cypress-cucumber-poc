//validating text ignoring spaces/punctuation.

function checkSentencePalindrome(sentence) {
    let cleaned = sentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(checkSentencePalindrome("A man, a plan, a canal: Panama") ? "Palindrome" : "Not Palindrome");
