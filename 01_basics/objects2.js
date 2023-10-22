//const tinderUser = new objects() //singleton value type declare
const tinderUser = {}
tinderUser.id = "1234abc"
tinderUser.isLoggedin =false
tinderUser.name = "mimohshukla"
console.log(tinderUser);


const regularUser = {
    email : "mimohshukla0029@gmail.com",
    fullName : {
        userName : "mimohshuklaa0001",
        lastname : "shukla"
    }
}
//console.log(regularUser.fullName.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = { 3:"c" , 4:"d"}
//const obj3 = Object .assign ({},obj1 , obj2)  ...this is also not used by me
const obj3 = { ...obj1,...obj2}
console.log(obj3);

//const obj3 = { obj1,obj2} not preferd 
const users = [ 
    {
        id :1,
        email : "mimohshukla001"

    },
    {
        id :1,
        email : "mimohshukla001"
        
    },
    {
        id :1,
        email : "mimohshukla001"
        
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys (tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//constructor
/*
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __pro*/


const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor :"hitesh"
}

const {courseinstructor} = course
console.log(courseinstructor);

{
    "name" : "mimoh",
    "coursename":"code"
    ""
}