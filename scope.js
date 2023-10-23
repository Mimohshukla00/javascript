// scopes
let a =300

if(true){
    let a = 10
    const b= 20
    var c =30
    //console.log("inner")
}
//console.log(a);
//console.log(b);
//console.log(c);
//.............................................................................
//nested scope
function one(){
    const username ="hitesh"
    function two(){
        const website ="youtube"
        console.log(username);
        two()
    }
}
one()



//********************************* */
console.log (addone(5))
function addone(num){
    return num+1
}
addTwo(7) // inthis type we got error
 const addTwo = function (num){
    return num+2
 }
 