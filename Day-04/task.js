let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
//o/p - It's a normal day.

// 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

let amount = 2500;
if (amount % 100 === 0) {
    console.log("Withdrawal successful");
} else {
    console.log("Invalid amount");
}



// 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

let num1 = 10, num2 = 5;
let operator = "+";
switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
        console.log(num1 % num2);
        break;
    default:
        console.log("Invalid operator");
}

// 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:

// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

let age = 25;
if (age < 18) {
    console.log("Ticket price: $3");
} else if (age <= 60) {
    console.log("Ticket price: $10");
} else {
    console.log("Ticket price: $8");
}

// 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

let birthMonth = "March";
switch (birthMonth) {
    case "March":
    case "April":
        console.log("Zodiac Sign: Aries");
        break;
    case "April":
    case "May":
        console.log("Zodiac Sign: Taurus");
        break;
    case "May":
    case "June":
        console.log("Zodiac Sign: Gemini");
        break;
    // Add more cases for other zodiac signs
    default:
        console.log("Invalid month");
}


// 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

let side1 = 5, side2 = 5, side3 = 5;
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}