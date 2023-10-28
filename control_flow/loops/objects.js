const myObjects = {
    js :'Javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift"
}
for (const key in myObjects) {
   console.log(`${key} shortcut is for ${myObjects[key]}`);
}
const programming = ["js","rb","py","c"]
for(const key in programming){
    console.log(programming[key]);
}