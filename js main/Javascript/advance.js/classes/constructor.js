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
