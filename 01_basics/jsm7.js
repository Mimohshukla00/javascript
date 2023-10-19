//dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
//type of date
console.log(typeof myDate);

let myCreate = new Date (2023 , 0,24)
console.log(myCreate.toDateString());
let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));