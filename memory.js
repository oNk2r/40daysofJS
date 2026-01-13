// stack (primitive)
//heap (non primitive)

let myytname="o5ive"
let anothername="niko"
anothername="n1ko" //gives copy

console.log(myytname);
console.log(anothername);
//heap
let userOne ={
    email:"user@.com",
    upi:"user@upi"
}
let userTwo=userOne //same refernce to heap

userTwo.email ="fck@gamil.com"
console.log(userOne.email);
console.log(userTwo.email);

