let score="6"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber =Number(score) //conversion
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"69"==>69
//"33abc"==>NaN

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//""=>f
//"hi"=>t

let someNumber=33
let stringNumber = String(someNumber)
console.log(stringNumber);
//33=>"33"

//operations
let value =3
let negValue=-value
console.log(negValue);
//+,-,*,**,/,%

let str1="hello"
let str2="hi"

let str3= str1+str2
console.log(str3);
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true); //1 and true+ -->error

let n1,n2,n3
n1=n2=n3=2+2

let gamecounter=100
++gamecounter; //++game-->pre
console.log(gamecounter)