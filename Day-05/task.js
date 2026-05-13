// . Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

// We can also use string concatenation to print the pattern

for(let i =1; i<=5; i++) {
    let row = "";
    for(let j=1; j<=i; j++) {
        row += "* ";
    }
    console.log(row);
}

// 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30\

let N = 3;

for(let i=1; i<=10; i++) {
    console.log(`${N} x ${i} = ${N*i}`);
}

//  Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let sum = 0;
for(let i=1; i<=500; i++) {
    if(i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);

// Write a program to print numbers from 1 to 20, but skip multiples of 3.
for(let i=1; i<=20; i++) {
    if(i % 3 !== 0) {
        console.log(i);
    }
}

// Write a program to reverse the digits of a given number using a while loop.

let number = 12345;
let reversed = 0;
while(number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
}
console.log(reversed);

// 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.

// For Loop: A for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and update. The loop executes as long as the condition is true.

// While Loop: A while loop is used when the number of iterations is not known and the loop needs to run until a certain condition is met. The loop executes as long as the condition is true.

// Do-While Loop: A do-while loop is similar to a while loop, but the condition is checked at the end of the loop. This means the loop will always execute at least once, regardless of whether the condition is true or false.
