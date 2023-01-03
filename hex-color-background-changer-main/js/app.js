let bodyBackgroundStyle = document.body.style
let colourButton = document.querySelectorAll(".btn")
let hexTitle = document.getElementById("hex-value")

function hexFunction() {
    var colours = []
    for (var i=0; i<3; i++) {
        colours.push(Math.floor(Math.random()*256).toString(16));  
    };
    return ("#"+colours.join(""))
}

for (var i=0; i<colourButton.length; i++) {
    colourButton[i].addEventListener("click", function(){
        var hexColour = hexFunction()
        bodyBackgroundStyle.backgroundColor = hexColour;
        hexTitle.innerHTML = hexColour
        console.log(hexColour)
    });
}

