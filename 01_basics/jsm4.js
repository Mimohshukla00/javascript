//permitive datatypes
// 7types of permitive >= it is call by value type
// string,Number,Boolean,null,undefined,symbol, Bigint


//refrence datatype >=(non-permitive)
// array,Objects,functions
//javascript is dynamically type language >= it means not neccesray to tpye its data type means
//const score = 100
//const scorevalue =100.9
//not neceesry to deifne int,float, char
// boolean
//const isLoogedin = true
//null
//const outsideTemp = null
//undefined
//const isLoogedinMi = undefined
//symbol
// const id = symbol('123')
// const anotherId = symbol('1234')

// console.log( id === anotherId)

//**************************************************************************8
//stack memory(permitive) ,heap memory (non permitive memory)


let myNameis = "mimohshukla"

let anothername = myNameis
anothername = "shuklajiiii"


console.log(myNameis);
console.log(anothername);


let userOne = {
    Email :" mimohshukla0001@gmail.com",
    upi: "user@upi"
}
let userTwo = userOne


userTwo.Email ="mimohshukla0001@gmail.com"

console.log(userOne.Email)
console.log(userTwo.Email)


// in stack memory it can only provide the copy of declared value
//in heap it give the original value of declared values and if chaanges occurs it must be in original vallues
