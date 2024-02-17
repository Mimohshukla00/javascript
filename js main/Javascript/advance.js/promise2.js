const promise5 = new Promise((resolve, reject) => {
    setInterval(function () {
      let error = false;
      if (!error) {
        resolve({ name: "Javascript", gmail: "hiteshchaudhary@gmail.com" });
      } else {
        reject("error:something went wrong");
      }
    }, 1000);
  });
  async function consumePromisefive() {
    try {
      const response = await promise5;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  // consumePromisefive()

  