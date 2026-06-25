//Print page numbers for items divided into pages using increment.

let items = 23, perPage = 5;
for (let page = 1; page <= Math.ceil(items / perPage); page++) {
    console.log(`Page ${page}`);
}
