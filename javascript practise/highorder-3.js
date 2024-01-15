const mynumbers =[1,2,3,4,5,6,7,8,9,10]

const byfor=mynumbers.forEach((nums)=>{
   return nums+1
    0})
console.log(byfor);//>>>>>>>>>>>>>>>>syntax error


// in array by using for each case we cannot change the origial values then instead using of for each we can use map 
const myNumbers =[10,20,30,40,50]
const newNumbers =mynumbers.map((numbers2)=>numbers2+30)
console.log(newNumbers);



// chaining

const newnums3 = myNumbers.map((num)=>num*10).map((num)=>num+3).filter((num)=>num>203)
console.log(newnums3);

