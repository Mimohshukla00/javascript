//for of loopss

const arr = [1, 2, 3, 4, 5, 6, 7];
for (const num of arr) {
  // console.log(num);
}
const greetings = "hello how are you";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  // console.log(`each characters is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATE OF AMERICA");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

// const myObj ={
//     game1:"cod",
//     game2:"spiderman"
// }
// for (const gamekey of myObj) {            ............................. not iterablee
//     console.log(gamekey);

// }
const myLangcoll = {
  js: "javascript",
  cpp: "cpp",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in myLangcoll) {
    console.log(`${key} is shortcut for ${myLangcoll[key]}`);
}

const newarray = ["js", "ruby", "swift", "python"];
for (const key in newarray) {
  //   console.log(newarray[key]);
}
const language = new Map();
language.set("USA", "United states of america");
language.set("Fri", "France");
language.set("IN", "INDIA");
for (const [key, value] in language) {
  console.log(key, value);
}


const bitchArr =["ruby","swift","js"]
bitchArr.forEach(function (ps,index,arra) {
    // console.log(ps,index,arr);
    
})
const naamarr =["mimoh","shukla","keyboard"]
naamarr.forEach((bitch)=>
    {console.log(bitch);
    })

const myCoding = [
    {
        language:"java",
        languagename:"jjaava"
    },
    {
        language:"javasss",
        languagename:"jjaavasss"
    },
    
    {
        language:"javaiiaaata",
        languagename:"jjaavammmmmm"
    }
    


]
myCoding.forEach((item)=>{
    console.log(item.languagename);
})



