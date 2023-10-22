//array=>2
const marvel_heros=["thor","ironman","spiderman"]
const dc_heroes = ["spiderman", "flash" , "batman"]
marvel_heros.push(dc_heroes)
console.log(marvel_heros);
const newMimoh =marvel_heros.concat(dc_heroes)
console.log(newMimoh);
const abhi = [...marvel_heros,...dc_heroes]
console.log(abhi);

//spread 
const anotherArray = [1,2,3,[4,5,6],7,[8,9,10], 11,[12,13,14]]
const realanother =anotherArray.flat(Infinity)
console.log(realanother);

console.log(Array.isArray("mimoh"))
console.log(Array.from("mimoh"))
console.log(Array.from({name:"hitesh"}));//intresting
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4));




