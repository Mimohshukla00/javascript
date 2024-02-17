const promise=new Promise((resolve, reject) => {
  const error =false;
  if (!error) {
    setTimeout(function () {
      resolve([1, 2, 3, 4, 5, 6, 7]);
    });
  }
  else{
    reject("ERROR:Something went wrong")
  }
});

async function comsumePromise() {
    try {
        const data=await promise
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
comsumePromise()
