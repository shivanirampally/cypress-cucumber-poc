// division-MainMethods.js

// 1. Simple Function as Main
function mainSimple() {
    let a = 10, b = 2;
    console.log(`Simple Function: ${a} / ${b} = ${a / b}`);
}
mainSimple();

// 2. Arrow Function Main
const mainArrow = () => {
    let a = 45, b = 9;
    console.log(`Arrow Function: ${a} / ${b} = ${a / b}`);
};
mainArrow();

// 3. Immediately Invoked Function Expression (IIFE)
(function mainIIFE() {
    let a = 64, b = 8;
    console.log(`IIFE: ${a} / ${b} = ${a / b}`);
})();

// 4. Async Main
async function mainAsync() {
    let a = 81, b = 9;
    console.log(`Async Function: ${a} / ${b} = ${a / b}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Async task complete - waited for 500ms");
}
mainAsync();

// 5. Module Entry Point
export async function mainModule() {
    let a = 120, b = 12;
    console.log(`Module Export: ${a} / ${b} = ${a / b}`);
}
