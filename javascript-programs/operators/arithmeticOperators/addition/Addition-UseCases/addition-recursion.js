//Implement addition recursively by increment/decrement.  
function add(a, b) {
    if (b === 0) return a;
    return add(a + 1, b - 1);
}
console.log("Recursive Addition:", add(5, 3)); 
