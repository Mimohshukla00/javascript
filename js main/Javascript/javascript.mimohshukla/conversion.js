// conversion

"use strict"
let score =33 
console.log(typeof score);



let valueInNumber = Number(score)

console.log(typeof valueInNumber);

const myNAn  = Number("33344mm")

console.log( typeof myNAn);




const myArray = [1,2,3,4,5,6,7]
const myArray2 = [1,2,35,6,7,89,0]



const whiist = Symbol("mimohshukla");
console.log(typeof whiist);
const objject ={
    myname:"mimohshukla",
    class:18,
    which:"wtf",
    [whiist]:"prashant"
    
}
console.log(objject["myname"]);
console.log(objject[whiist]);



const newsymbol = Symbol("mimohshuklaaaaa")
console.log(newsymbol.valueOf())
 const name = new Object();
 name.miname = "mimohhhhhhhhhhh"
 console.log(name.miname);

 const howwouldi ={}
 howwouldi.number = 7344536874378967
 console.log(howwouldi.number);




 const detail = {
    name:"shukla",
    phone :7233091999,
    class:"btech"
 }

 detail.name ="mimoh"

 console.log(detail.name);

//  Object.freeze(detail) >>>>>>>>>>>>>>>>>>>> this will ffrezze the object mutable propety
 detail.name="howwww"
 console.log(detail.name);
 



    
for (const x in detail) {
    // if (Object.hasOwnProperty.call(detail, x)) {
    //     const element = detail[x];
    //     console.log(element);
        
    // }

    console.log(detail[x]);
}

const jioObject = {
    name:"prashant",
    class:12,
   

    
   


}

 const fulllnameis =function () {
    console.log(`my name is ${this.name}`);
    
}


// console.log();











console.log("mmmmmm");

 

