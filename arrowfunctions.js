// all about arrow function
const user = {
    username:"mimohshukla",
    price:999,
    welcomeMessage :function(){
        console.log(`${this.username},welcome to website`)
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.welcomeMessage= "hitesh";
// //user.welcomeMessage()
// //this>= tells us about current contest
// //console.log(this)
// function chai(){
//     console.log(this);
// }
// chai()
// const mimoh =() =>{
//     let username ="hitesh"
//     console.log(this);
// }
// mimoh()
// const addTwo =(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4))
//in this type we should defenitely write return
//=> if this is used then we should avoid return
// const addTwo =(num1,num2) => (num1 + num2)
// console.log(addTwo(3,4))
// const myArray = [2,3,4,5,6]

// myArray.forEach()
