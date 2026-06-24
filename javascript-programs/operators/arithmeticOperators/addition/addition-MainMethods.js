// 1. Simple Function as Main
function mainSimple() {
    let a = 5, b = 7;
    console.log(`Simple Function: ${a} + ${b} = ${a + b}`);
}
mainSimple(); 


// 2. Arrow Function Main
const mainArrow = () => {
    let a = 10, b = 20;
    console.log(`Arrow Function: ${a} + ${b} = ${a + b}`);
};
mainArrow(); 


// 3. Immediately Invoked Function Expression (IIFE)
(function mainIIFE() {
    let a = 2, b = 3;
    console.log(`IIFE: ${a} + ${b} = ${a + b}`);
})();

// 4. Async Main (best for automation/interviews)
async function mainAsync() {
    let a = 15, b = 25;
    console.log(`Async Function: ${a} + ${b} = ${a + b}`);

    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Async task complete");
}
mainAsync(); 


// 5. Module Entry Point 
export async function mainModule() {
    let a = 100, b = 200;
    console.log(`Module Export: ${a} + ${b} = ${a + b}`);
}

