//functions


function sayMyname(){
    console.log("m");
    console.log("i");
    console.log("m");
    console.log("o");
    console.log("h");
}

//sayMyname()

/*function addTwoNumber (number1,number2){
    console.log(number1+number2) ;
}*/
 function addTwoNumber (number1,number2){
    // let reult = number1+number2
    
    // return result
    return number1+number2
 }
 const result = addTwoNumber(3,4);
 console.log("result:" , result);
//(!username) also coorect
 function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
 }
 console.log(loginUserMessage());

 function calculateCartPrice( val1, val2, ...num1){
    return num1
 }
 console.log(calculateCartPrice(200,400 ,500))

 const user = {
    username:"mimoh",
    price:100
 }
 function handObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
 }
// handObject(user)
 handObject({
    username:"mimohshukla",
    price:400
 })
const myNewArray =[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
