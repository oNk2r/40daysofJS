//primitive
// 7 types => string,number,boolean,Null,undefined,symbol,BigInt

//refernce [non primitive]
//array , object,functions
 const heros =["h1","h2" ,"h3"];
 let myObj ={
    name: "niko",
    age : 22,
 }

const myFunction = function(){
    console.log("helloworld");
    
}
console.log(typeof heros);

console.log(null >= 0); // true
console.log(null>0);   //false //comparsion operation
console.log(null ==0); //false ,equality

//but undefined all false









let score ="33"
console.log(typeof score);

let valueInNumber = Number(score) //convert to number
console.log(typeof valueInNumber);
//mostly converts but might return NAN[not a number] for eg 33abac ==>NaN


// "33"==>33
// "33abc"==>NaN
// true=>1; f=>0;

let isLoggIn=1
let booleanIsLoggedIn = Boolean(isLoggIn)
console.log(booleanIsLoggedIn);

// ""==>f, "fck"=>t;

let n=33
let stringNumber = String(n)
console.log(stringNumber);
console.log(typeof stringNumber);

 //========= operations =============================

 let value=3
 let negValue=-value //neg value

 let str1="hello"
 let str2 = " niko"
 let str3=str1+str2;
 console.log(str3)

console.log("1"+2+2); //122
console.log(1+2+"2"); //32

console.log(+true);
console.log(+"");

let cnter=100
cnter++;
console.log(cnter);





 


