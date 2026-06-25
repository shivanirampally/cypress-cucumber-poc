// Implement countdown using recursion and decrement.
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}
countdown(5);
