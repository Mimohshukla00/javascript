const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async Task is completed");
    resolve();
  }, 1000);
});

promise.then(function () {
  console.log("promise is resolved ");
});

new Promise(function (resolve, reject) {
  setTimeout(function name() {
    resolve();
    console.log("promise2 is async");
  }, 2000);
}).then(function () {
  console.log("promise 2 is resolved ");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "mimohshukla", number: 723301000000 });
  }, 1000);
});

promise3.then(function (data) {
  console.log(data);
});

const promise4 = new Promise((resolve, reject) => {
  setInterval(function () {
    let error = false;
    if (!error) {
      resolve({ name: "hiteshsir", gmail: "hiteshchaudhary@gmail.com" });
    } else {
      reject("error:something went wrong");
    }
  }, 1000);
});

// this will not doo work
promise4
  .then(function (params) {
    return params.name;
    console.log(username);
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally promise is terminated ");
  });

