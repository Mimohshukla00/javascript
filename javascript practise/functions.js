// JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it)

function addition(a,b) {
    return a+b
    
}
console.log(addition(2,4));

function multiplication(x,y) {
    console.log(x*y);
    return
    
}
multiplication(3,4)

function divide(m,n) {
    let c = m/n
    console.log(c);
    return c
    
}
divide(12,6)

function sum(first, second, ...rest) {
    // 'rest' is an array containing the rest of the arguments
    console.log(first);  // Prints the first argument
    console.log(second); // Prints the second argument
    console.log(rest);   // Prints an array with the rest of the arguments
  }
  
  sum(1, 2, 3, 4, 5);



  function rest(first,second,...bacheeehue) {
    console.log(bacheeehue);
    
  }
  rest(1,2,3,4,5,6,7)
  