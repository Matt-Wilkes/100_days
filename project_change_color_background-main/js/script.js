// Use an event listener to listen for clicks 
// when button is clicked, the document.body.style.backgroundColor will change to one of the colours in the 'colour' array
var mainButton=document.querySelectorAll(".btn");
let colour = ["yellow","green","blue","orange","purple"]


for (var i=0; i<mainButton.length; i++) {
    mainButton[i].addEventListener("click", function () {
      var randNumber = Math.floor(Math.random()*(colour.length));
      document.body.style.backgroundColor = colour[randNumber]
    });
  }
