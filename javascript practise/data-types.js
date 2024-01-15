// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object
let a = "mimohshukla";
console.log(a);
console.log(typeof a);

let b = 10;
console.log(b);
console.log(typeof b);

let c = BigInt(
  "122873902482365083201652875621"
); /*JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.*/
console.log(c);
console.log(typeof c);

let d = true;
console.log(d);
console.log(typeof d);

var e;
console.log(e);
console.log(typeof e);

// In JavaScript, undefined is a primitive value that represents the absence of a defined value. If a variable has been declared but not assigned a value, or if a function does not explicitly return a value, JavaScript assigns it the value undefined. It's also the default value for function parameters that are not provided.


// In JavaScript, null is a special value that represents the intentional absence of any object value. It is a primitive value, and it is often used to indicate that a variable or object property has no assigned value or that a function intentionally returns no value.

// Here are some examples illustrating the use of null:

let mynull = null;
console.log(mynull);
console.log(typeof mynull)/*;>>>>>>>>>>>>object*/
// In JavaScript, Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). Symbols are unique and immutable values that are often used as property keys in objects to avoid naming conflicts.
const name =   Symbol("arguments");
console.log(name);
console.log( typeof name);

// In JavaScript, an object is a composite data type that allows you to group values (both primitive and other objects) together. Objects in JavaScript are key-value pairs, where keys are strings or symbols, and values can be any data type, including other objects.
const myobbject = {
    name:"mimohshukla",
    class:12

}
console.log(myobbject["name"]);
console.log(typeof myobbject["name"]);   
// this ^will return string
// this typeof myobbject will return object

console.log(typeof myobbject);


