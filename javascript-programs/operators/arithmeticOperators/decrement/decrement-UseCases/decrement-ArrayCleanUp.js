//Remove elements from the end of an array using decrement.
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length; i > 0; i--) {
    arr.pop();
    console.log("Array after pop:", arr);
}
