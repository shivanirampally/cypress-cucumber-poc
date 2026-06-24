// 1. Simple Function as Main
function mainSimple() {
    let a = 8, b = 3;
    console.log(`Simple Function: ${a} - ${b} = ${a - b}`);
}
mainSimple(); 

// 2. Arrow Function Main
const mainArrow = () => {
    let a = 20, b = 5;
    console.log(`Arrow Function: ${a} - ${b} = ${a - b}`);
};
mainArrow(); 

// 3. Immediately Invoked Function Expression (IIFE)
(function mainIIFE() {
    let a = 12, b = 6;
    console.log(`IIFE: ${a} - ${b} = ${a - b}`);
})(); 


// 4. Async Main
async function mainAsync() {
    let a = 100, b = 40;
    console.log(`Async Function: ${a} - ${b} = ${a - b}`);

    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Async task complete -waited for 500ms");
}
mainAsync(); 

// 5. Module Entry Point
export async function mainModule() {
    let a = 200, b = 75;
    console.log(`Module Export: ${a} - ${b} = ${a - b}`);
}
