const useremail ="mimohshukla0001@gmail.com"
if(useremail){
    console.log("Got user name");

}
else {
    console.log("Dont have user email");
}
//falsy values
//false,zero,-0,bigint 0n,empty string,null,undefined,NaN
//except all falsy values all values all are truthy values 
//truthy values
//"0" string ke andar truthy hoti hai
//"0",'false',"",{},[],function(){}

let val1;
val1 =5 ?? 10
val1 = null ??10
//nullish coolescing opertaor
console.log(val1);
