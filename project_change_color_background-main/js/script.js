// I want to use an event listener to listen for clicks 
// when button is clicked, background will change colour
// need to change dom background colour
var mainButton=document.querySelectorAll(".btn");
let colour = "yellow"


for (var i=0; i<mainButton.length; i++) {
    mainButton[i].addEventListener("click", function () {
      console.log("I got clicked!");
      document.body.style.backgroundColor = colour
    });
  }

// function respondToClick() {
//     console.log ("I got clicked");
  
//   }
