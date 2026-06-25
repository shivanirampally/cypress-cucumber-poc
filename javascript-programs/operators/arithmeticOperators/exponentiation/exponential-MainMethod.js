// exponential-MainMethods.js

// 1. Simple Function as Main
function mainSimple() {
    let a = 2, b = 5;
    console.log(`Simple Function: ${a} ** ${b} = ${a ** b}`);
}
mainSimple();

// 2. Arrow Function Main
const mainArrow = () => {
    let a = 3, b = 4;
    console.log(`Arrow Function: ${a} ** ${b} = ${a ** b}`);
};
mainArrow();

// 3. Immediately Invoked Function Expression (IIFE)
(function mainIIFE() {
    let a = 5, b = 3;
    console.log(`IIFE: ${a} ** ${b} = ${a ** b}`);
})();

// 4. Async Main
async function mainAsync() {
    let a = 10, b = 2;
    console.log(`Async Function: ${a} ** ${b} = ${a ** b}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Async task complete - waited for 500ms");
}
mainAsync();

// 5. Module Entry Point
export async function mainModule() {
    let a = 7, b = 3;
    console.log(`Module Export: ${a} ** ${b} = ${a ** b}`);
}
