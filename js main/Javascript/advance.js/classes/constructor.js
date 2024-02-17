// const date=new Date()
// const promise=new Promise()

function user(userName,LoginCount,isLoggedin) {
    this.userName=userName
    this.LoginCount=LoginCount
    this.isLoggedin=isLoggedin
    this.greetings=function () {
        console.log(`welcome ${this.userName}`);
        
    }
    return this
}
const user1=new user("mimohshukla",19,true)
const user2=new user("hitesh",21,true)
console.log(user1);
console.log(user2);


// new>>>>>>>>>>> new object is created 
//constructor function is called 




function multipay(params) {
    return params*5
    
}
multipay.power=2
console.log(multipay(5));
console.log(multipay.power);
console.log(multipay.prototype);


function createuser(userName,score) {
    this.userName=userName
    this.score=score
}
createuser.prototype.increment=function () {

    score++
    console.log(`score is ${this.score}`);
    
}
const chai= new createuser("chai",25)
const tea= new createuser("tea",50)

console.log(chai);
console.log(tea);