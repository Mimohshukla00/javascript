// >>>>>>>>>>>>>project---------2 >>>>>>>>>>>> using Javascript

const clock = document.getElementById("clock");

setInterval(function (params) {
  let date = new Date();
//   console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleString()
}, 1000);

