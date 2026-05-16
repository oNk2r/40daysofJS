const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);

// GEC - Global Execution Context
// 1. Creation Phase - message undefined, sum allocated memory, mul allocated memory, calc allocated memory, getResult allocated memory
// 2. Execution Phase - message assigned with "I can do it" value, sum function definition is assigned to it, mul function definition is assigned to it, calc function definition is assigned to it, getResult function definition is assigned to it and then getResult(8, 5) is invoked and a new execution context will be created for the function and the code inside the function will be executed.

// FEC - Function Execution Context
// when the function getResult() is invoked, a new execution context will be created for the function and the code inside the function will be executed.

// creation FEC - a undefined, b undefined
// execution FEC - a assigned with 8 value, b assigned with 5 value and then calc(a, b) is invoked and a new execution context will be created for the function and the code inside the function will be executed.

//stack - getResult() --> calc() --> sum() and mul() --> global execution context.