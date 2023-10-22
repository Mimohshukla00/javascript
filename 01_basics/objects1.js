//all about objects...............................................
//singleton 

//objects literals

//symbols
const mySym = Symbol("key1")

const Jsuser = {
    name:"mimoh",
    "full name":"mimohshukla",
    [mySym]:"mykey1",
    age :19,
    location : "merrut",
    email:"mimohshukla0001@gmail.com",

    isLoggedin : false,
    lastloginDays : ["monday","wednesday"]
}
//console.log(Jsuser.email);
//console.log(Jsuser["email"]);
console.log(Jsuser["full name"])
//console.log(Jsuser[mySym])
// to change object

Jsuser.email = "abhisguaoj0010@gmail.com"
console.log(Jsuser.email);
//Object.freeze(Jsuser)
Jsuser.email = "mimoo2378@gmail.com"
//console.log(Jsuser["email"]);

//functions in object
Jsuser.greet = function(){
    console.log("mimohshuklasoftware engeeneer");
}
console.log(Jsuser.greet());