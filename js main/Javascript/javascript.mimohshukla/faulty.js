function addition(a,b) {

   
    
}
function subtraction(a,b) {
    console.log(a-b);
    
}
function multiplication(a,b) {
    console.log(a*b);
    
}
function devision(a,b) {
    console.log(a/b);

    
}

let a =prompt("enter a number:");
let b= prompt("enter a  number:");
let operation =prompt("enter a operation to perform:");


switch (operation) {
    case '+':
        addition(a,b)
        break;
    case '-':
        subtraction(a,b)
        break;
    case '*':
        multiplication(a,b)
        break;
    case '/':
        devision(a,b)
        break;

    default: console.log("wrong operation");
        break;
}














