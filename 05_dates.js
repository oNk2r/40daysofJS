// single moment jan 1 1970 UTC
// type ==> object
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2026,0,24);
console.log(myCreatedDate.toDateString())

myDate.toLocaleString('default',{
    weekday:"long",
})