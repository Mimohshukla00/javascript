const array1=[1,2,3,4,5,6,7,8]
const myTotal =array1.reduce((acc,curr)=>acc+curr,0)
   
console.log(myTotal);



const courses =[
    {
        itemsName:"javascript",
        price:3000
    },
    {
        itemsName:"java",
        price:30000
    },
    {
        itemsName:"python",
        price:40000
    },
    {
        itemsName:"datascience",
        price:5000
    }



]
const shoppingcart =courses.reduce((acc,item)=>acc+item.price,0)
console.log(shoppingcart);