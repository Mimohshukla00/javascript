// const myname1="Mimohshukla"
// const myName2="whomimohshukla"
// console.log(myname1.truelength);
// console.log(myname2.truelength);


let array=["thor","spiderman","hammmer"]


let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderman:function () {
        console.log(`spidey power is ${this.spiderman}`);
        
    }
}
Object.prototype.mimoh=function () {
    console.log(`hitesh is present in all objects `);
    
}

heropower.hitesh()
