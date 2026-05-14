console.log('Day 06');

function sum(a, b) {
    console.log('Sum of', a, 'and', b, 'is', a + b);
}
sum(5, 10);

let printMe = function() {
    console.log('This is a function expression');
}

printMe();
// console.log(printMe);

function sum(a,b){
    const result = a + b;
    console.log('Sum of', a, 'and', b, 'is', result);
    return result; // can be used to return the result to the caller
}

let result = sum(5, 10);
console.log('Returned result:', result);

function double(num) {
    return num * 2;
}
console.log('Double of', result, 'is', double(result));

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice'));

//default parameters
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet('Bob')); // Output: Hello, Bob!

//Rest parameters
function calculateThis(x,y,...rest){
    console.log(x,y,rest);
}
calculateThis(1,2,3,4); // Output: 10

// Nested Fucntion

function outer() {
    console.log("Outer");

    return function inner() {
        console.log("inner")
    }
    //inner();
}

let innerFunction = outer();
console.log(innerFunction());

//callback function

function foo(func){
    console.log("foo function");

    func();
}

foo(function(){ //anonymous function
    console.log("callback function");
});

//pure function
function pureFunction(a, b) {
    return a + b;
}
console.log(pureFunction(2, 3)); // Output: 5
console.log(pureFunction(2, 3)); // Output: 5 (same output for same input)

// Higher Order Function

function getCamera(camera) {
    camera();
}

getCamera(function() {
    console.log("Sony")
})

function returnFunc(param) {
    return function() {
        if (param === 1) {
            console.log("Hello")
        }

    }
}

const retFun = returnFunc(3);
retFun();


// Arrow Function

let greetMe = (greetingMsg) => {
    //
    //
    return greetingMsg + " great"
}

console.log(greetMe("Hola"));


// IIFE(Immediately Invoked Function Expression)
(function(count){
    console.log("IIFE", count)
})(1)


// Recursion

/*function foo() {
    foo();
}*/

function fetchWater(count) {
    console.log("Fetching Water...", count);
    if (count === 0) {
        console.log("No more water is left to fetch...");
        return;
    }
    fetchWater(count - 1)
}

fetchWater(5)