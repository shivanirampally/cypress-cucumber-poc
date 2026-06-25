// increment-MainMethods.js

// 1. Simple Function as Main
function mainSimple() {
    let a = 10;
    console.log(`Simple Function: ${a}++ = ${a + 1}`);
}
mainSimple();

// 2. Arrow Function Main
const mainArrow = () => {
    let a = 25;
    console.log(`Arrow Function: ${a}++ = ${a + 1}`);
};
mainArrow();

// 3. Immediately Invoked Function Expression (IIFE)
(function mainIIFE() {
    let a = 14;
    console.log(`IIFE: ${a}++ = ${a + 1}`);
})();

// 4. Async Main
async function mainAsync() {
    let a = 50;
    console.log(`Async Function: ${a}++ = ${a + 1}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Async task complete - waited for 500ms");
}
mainAsync();

// 5. Module Entry Point
export async function mainModule() {
    let a = 100;
    console.log(`Module Export: ${a}++ = ${a + 1}`);
}
