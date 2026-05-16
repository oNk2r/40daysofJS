console.log("Inside Global Execution Context");
var a = 5;
function testMe() {
    console.log("Inside testMe Execution context");
    var b = 10;
    var user = {
        name: "tapas",
        country: "India"
    }
    function testAgain() {
        console.log("Inside testAgain Execution Context");
        console.log("Exiting testAgain Execution Context");
    }
    testAgain();
    console.log("Exiting testMe execution context");
}
testMe();
console.log("Exiting global execution context");

// GEC - Global Execution Context
// 1. Creation Phase - a undefined, testMe allocated memory
// 2. Execution Phase - a assigned with 5 value, testMe function definition is assigned to it

// FEC - Function Execution Context
// when the function testMe() is invoked, a new execution context will be created for the function and the code inside the function will be executed.

// creation FEC - b undefined, user undefined, testAgain allocated memory
// execution FEC - b assigned with 10 value, user assigned with object value, testAgain function definition is assigned to it and then testAgain() is invoked and a new execution context will be created for the function and the code inside the function will be executed.

// creation FEC - no variable or function is defined inside testAgain function
// execution FEC - console.log("Inside testAgain Execution Context") will be executed and then console.log("Exiting testAgain Execution Context") will be executed.