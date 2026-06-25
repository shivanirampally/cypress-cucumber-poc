//Split [1,2,3,4,5,6] into chunks of size 2.
let arr = [1,2,3,4,5,6];
let chunkSize = 2;
let chunks = [];
for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
}
console.log(chunks); // [[1,2],[3,4],[5,6]]
