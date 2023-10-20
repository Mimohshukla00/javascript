//array
//array are resizeable in javacript so if we want to resize we may be
const myArra = [10,20,30,40,50]

console.log(myArra[0]);

const myMim = new Array (1,2,3,4,5)

console.log(myMim[2]);
//array methods
myArra.push(6)
console.log(myArra);//o add value in array
myArra.pop()// to delete the last added value
console.log(myArra);
myArra.unshift(9)// to add the value in start
console.log(myArra);
myArra.shift()// to remove the last inserted value in array
console.log(myArra);
console.log(myArra.includes(9))// to verify the values in array
console.log(myArra.indexOf(3));// to know the index of array
const newArr = myArra.join()// to add array into string or to add array into string
console.log(myArra);
console.log(typeof (newArr));

// slice,splice 
console.log("A",myArra);
const myn1 = myArra.slice(1,3)
console.log(myn1);
console.log("B",myArra);
const myn2 = myArra.splice(1,3)
console.log("c",myArra)
console.log(myn2);
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
