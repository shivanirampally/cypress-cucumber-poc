//Add numbers only if both are positive.  
function conditionalAdd(a, b) {
    if (a > 0 && b > 0) {
        console.log("Sum:", a + b);
    } else {
        console.log("Condition not met.");
    }
}

conditionalAdd(5, 3);   
conditionalAdd(-1, 4);  