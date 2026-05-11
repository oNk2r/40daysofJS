console.log("Day 03");

// Operator - Symbols + - * /
// Operands - x+y, x and y are the operands.
// Expression x = 2 / 3 + 4

// Arithmetic Operators
console.log("**** Arithmetic Operators ****")
let a = 12;
let b = 5;

let f_name = "jake"
let l_name = "le"

// console.log(f_name + l_name) // don't do this!

console.log(a + b);
console.log(a - b);
console.log(b - a);
console.log(a * b);
console.log(a / b);
console.log(a ** b)
console.log(a % b)

let count = 5;
console.log(count--) // count = count - 1 // 5
console.log(count) // 6

console.log(--count) // count = count - 1 and 7

// Assignment Operators
console.log("**** Assignment Operators ****")

let x = 10;
 x += 5; // x = x + 5 (15)
 x -=3; // x = x - 3 (12)
 x *= 2; // x = x * 2 (24)
 x /= 4; // x = x / 4 (6)


 // Comparison Operators
console.log("**** Comparison Operators ****")
console.log(0 == false) // equal
console.log(3 == '3') //true
console.log(3 != '3') //false

//  == lossy equality operator
// === strict equality operator

console.log(3 === '3') //false

console.log(null === null) //true
console.log(undefined === undefined) //true

// NaN = Not a Number

let obj1 = {'name': 'tapaScript'} // XX0011
let obj2 = {'name': 'tapaScript'} // YY022

console.log(obj1 === obj2)
console.log(obj1 !== obj2)

4 > 3
2 > 1
1 > 7
2 >= 2

4 < 3
2 < 7
3 <= 9


// Logical operators
console.log("**** Logical operators ****")
// && || ?? !
// op1 && op2
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // "Horse"
// if the first operand is falsy, it returns the first operand; otherwise, it returns the second operand.

4 > 5 && 4 === 6

console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Cow" || "Horse"); // "Cow"
// if the first operand is truthy, it returns the first operand; otherwise, it returns the second operand.

console.log(!false)

let a1 = null ?? 1; // 1
let a2 = undefined ?? 3 // 3
const a3 = false ?? "tapaScript" // false
const a4 = 0 ?? "tapas" // 0


// Conditional (ternary) operator
console.log("**** Conditional (ternary) operator ****")

// condition ? val1 : val2

let age = 23;
age >= 60 ? "Senior Citizen" : "Non Senior Citizen";


// Bitwise operators
console.log("**** Bitwise operators ****")

// 10 in decimal
// 10 in 32 bits representation of 0, 1

// & | ^ ~ << >>

// 15 & 9 = 9
// 1111 & 1001 = 1001 = 1 * (2 ** 0) + 0 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3)

// 15 / 2 = 7 (1)
// 7 / 2 = 3 (1)
// 3 / 2 = 1 (1)

// 9/2 = 4 (1)
// 4/2 = 2 (0)
// 2/2 = 1 (0)

// 15 | 9 = 15

// 1111 | 1001 = 1111

// 15 ^ 9 = 6
// 1111 ^ 1001 = 0110

// 9 << 2 = 36

// 1001 << 2 = 100100

// 9 >> 2 = 2
// 1001 >> 2 = 0010

//  5 << 1 = 10
// 5 in binary is 101, shifting left by 1 gives us 1010, which is 10 in decimal.
// Grouiping
console.log("**** Grouping ****")

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r) // 1 + 2 * 3 = 1 + 6 = 7
p + (q * r) // 7

(p + q) * r // (1 + 2) * 3 = 3 * 3 = 9

// p * r + q * r = 1 * 3 + 2 * 3 = 3 + 6 = 9

p * (r + q) * r


// typeof
console.log("**** typeof ****")


typeof "tapas"; // "string"
typeof false; // "boolean"

let size = 100;
typeof size; // "number"

const numbers = [1,2,3,4]
typeof numbers; // "object"

typeof null; // "object"


// instanceof
console.log("**** instanceof ****")

// object instanceof objectType