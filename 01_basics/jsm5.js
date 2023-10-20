//strings

//practiseee of string functions

// it may be in ""
//or it may be in"
const name ="mimoh"
const number = 7233091999

console.log(name + number)

//not good practise

console.log(`hello my name is ${name} and my number is  ${number}`);

//prefred in backend 
// another method to declare string

const gameName = new String ('mimohshukla')

console.log(gameName[0]);
console.log(gameName.charAt(2))
console.log(gameName.anchor())
// const newString = gameName.substring(-8,4)
console.log(gameName.at(8))
console.log(gameName.big())
console.log(gameName.blink())
console.log(gameName.charAt(3))
console.log(gameName.codePointAt(2))
console.log(gameName.concat(945438382188726637888743679545799826))
console.log(gameName.length)
console.log(gameName.localeCompare)


// console.log(newString);
const anotherString =gameName.slice(-8,4) 
console.log(anotherString);

//trim to avoid spacees

const newStringOne ="  hiteshhh   "
console.log(newStringOne);
console.log(newStringOne.trim());
//The trim() method removes whitespace from both sides of a string

const url = "http://www.google.com/mimoh%20shukla"

console.log(url.replace('%20','-'));
//The replacement text.


//Passes a string and replaceValue to the [Symbol.replace] method on searchValue. This method is expected to implement its own replacement algorithm.
console.log(url.includes ('mimoh'));
//to search keyword


console.log(gameName.split('-'))