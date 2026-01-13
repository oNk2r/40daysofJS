// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log( typeof myDate);

// let myDate = new Date(2023,0,23,5,4)
// let myDate = new Date("2023-01-14")
let myDate = new Date("12-02-2023")

console.log(myDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime());//msec
// console.log(Math.floor(Date.now()/1000));
let newDate =new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
})