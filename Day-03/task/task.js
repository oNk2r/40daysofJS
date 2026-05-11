const num = 23;
console.log(num % 2 === 0 ? "EVEN" : "ODD")

const age = 23;
console.log(age > 18 ? "Eligible" : "Not Eligible");


// // 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const bonus = annualSalary * 0.20;
const ctc = annualSalary + bonus;
console.log(ctc);

const color = "red";
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("caution");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("invalid color");
}

// // 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

//  Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

const units = 100; // Example units consumed
const costPerUnit = 150;
const monthlyBill = units * costPerUnit;
const annualBill = monthlyBill * 12;
const discount = annualBill * 0.20;
const discountedAnnualBill = annualBill - discount;
console.log(monthlyBill);
console.log(annualBill);
console.log(discountedAnnualBill);

const year = 2026;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// find the maximum of these three numbers using the comparison operators.
let p = 1, q = 2, r = 3;
console.log("max:", p>q ? (p>r ? p : r) : (q>r ? q : r))

// A tricky one for you

//  Create a variable count and assign a value, say, 5.
//  Now use the Bitwise shift operator to make the number double.
//  Print it on the console.


const count = 5;
const doubledCount = count << 1;
console.log(doubledCount); // Output: 10