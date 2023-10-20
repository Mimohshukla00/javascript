//array=>2
const marvel_heros=["thor","ironman","spiderman"]
const dc_heroes = ["spiderman", "flash" , "batman"]
marvel_heros.push(dc_heroes)
console.log(marvel_heros);
const newMimoh =marvel_heros.concat(dc_heroes)
console.log(newMimoh);
const abhi = [...marvel_heros,...dc_heroes]
console.log(abhi);

