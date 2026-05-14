// task

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(0));

function findMax(num1 , num2) {
    if (num1 > num2) {
        return num1;
    }
    else if (num2 > num1) {
        return num2;
    }
    else {
        return "Both numbers are equal";
    }
}
console.log(findMax(5, 10));

// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

function isPalindrome(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr;
}

console.log(isPalindrome("madam"));

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

function capitalizeWords(sentence) {
    let words="";
    for (let i = 0; i < sentence.length; i++) {
        if (i === 0 || sentence[i - 1] === " ") {
            words += sentence[i].toUpperCase();
        } else {
            words += sentence[i];
        }
    }
    return words;
}
console.log(capitalizeWords("hello world"));

// Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

(function(greeting) {
    console.log(greeting);
})("Hello, JavaScript!");

function greet(name, callback) {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}
greet("Alice", function(message) {
    console.log(message);
});


//stack flow 1
// - f1()
// - f2()

// 9.. Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {
//     f1();
// }
// f2();




// 10. Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {}
// function f3() {
//     f1();
// }
// f2();
// f3();
// f1();

// f2()

//f1()
//f3()