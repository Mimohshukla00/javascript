//array

const myArr = [0,1,2,3,4,5]

console.log(myArr[0]);
const newArr = new Array(1,2,3,4,5)
console.log(newArr[2]);

//array methods 
//to add or modify values in array


myArr.push(6)
myArr.push(9)
myArr.pop() // to remove the last value in array
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
//shift the first value or added the value but it is not used preferred because if value is too big then it is not used by prefrence
myArr.shift()// to remove the first value of array inserted this is used 
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
// to change data type and to join 
const newArrm = myArr.join()

console.log( typeof newArrm);

//slice and splice

console.log("A",myArr);
