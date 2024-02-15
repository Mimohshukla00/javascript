const selectall = document.querySelector(".name");
const selectone = document.querySelectorAll(".name");
const selectbyid = document.getElementById("1");
// const selectbyid=document.getElementById("1")
const selectbyclassName = document.getElementsByClassName("full name");
const selectbytagname = document.getElementsByTagName("h1");

// ############################ to create element
// const addnewelement=document.createElement()

// // create a new div element
// const newDiv = document.createElement("div");

// // and give it some content
// const newContent = document.createTextNode("Hi there and greetings!");

// // add the text node to the newly created div
// newDiv.appendChild(newContent);

// // add the newly created element and its content into the DOM
// const currentDiv = document.getElementById("div1");
// document.body.insertBefore(newDiv, currentDiv);

const newelement=document.createElement("h2")
const nodecreate=document.createTextNode("my name is mimoh shukla and i am software developer ")
newelement.appendChild(nodecreate);
const cuurentdiv=document.getElementById("mimoh")
document.body.insertBefore(newelement,mimoh)

document.removeChild("h2")
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
// button.setAttribute("disabled", "");

