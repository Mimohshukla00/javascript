// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// for (const about of array1) {
//   console.log(about);
// }
const string = "mimohshukla";
for (const letters of string) {
  console.log(letters);
}
const object = {
  name: "mimohshukla",
  role: "web developer",
  number: 7233091999,
};
// for (const [data] of object) {
//   console.log([data]);
//   //object is not iteratable in for of loops
// }
// const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);


for (const [key,value] of map1) {
    console.log([key,value]);
    
}



