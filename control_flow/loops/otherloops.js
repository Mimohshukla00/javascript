//for of loops
//["","",""]
//[{},{},{}]
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
const greet = "heelo world"
for (const greetings of greet) {
    console.log(`each char is ${greet}`)
    
}
//maps
const map =new Map()
map.set('IN',"India")
map.set('USA',"united states of america")
//console.log(map);
for(const [key,value] of map){
    console.log(key,`:-`,value);
}
const myObjects ={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for (const[key,value] of myObjects) {
//     console.log(key,':-',value);
    
// }