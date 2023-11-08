
//number of circles we have in the game
var numCircles = 6;
//The colour variable should be an array that contains as many random RGB colours as there are circles. 
var colours = [];
//This pickedColor is the RGB color we are trying to guess (string)
var pickedColor;
//This is the default colour of the game. 
let defaultColour="#582c99"

//Grab all appropriate elements from the HTML.
var circles  = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message"); 
var resetButton = document.getElementById("restart")
var banner = document.querySelector("h1");


//The init function should reset the stage and set a new RGB color
function init() {
	//Call the reset function
    reset();
	//Set the text of the colourToGuess element to display the correct RGB color
	clickCircle();
}


//Setup so that when the reset button is clicked, the reset function gets called 
resetButton.addEventListener("click",reset);


//Define what should happen when any circle is clicked. 
//When a circle is clicked, it should check if the color of a circle 
//is the same as the color to be guessed. If it is, you have won. You should set 
// the display message to "You win", change the text of the reset button to "Play again"
// and set the color of each circle and of the banner to be the color we were guessing. 
// If the color you clicked on was incorrect, you should set the color of the circle you just clicked to be the default color 
// and change the result text to be "Try again"
function clickCircle() {
    for (let i = 0; i < circles.length; i++) {
        // Add click listeners to circles
        circles[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                resultMessage.textContent = "You Win";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                banner.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = defaultColour;
                resultMessage.textContent = "Try Again";
            }
        });
    }
}


// The reset function should set new values for the colours array by calling genRandomColours.
// pick a color from these and set it as the color you are trying to pick. This color 
// should be obtained by calling chooseColor.
// Display the colour RGB value on the main page.
// Set the colour of the circles to the random colors you generated. 
// Set the color of the banner to the default color, set the text of the reset
// button to "Restart" and the result text to an empty String. 
// Ensure that if a circle is clicked that the clickCircle function is called. 
function reset() {
    colours = genRandomColours(numCircles);
    pickedColor = chooseColor();
    colourToGuess.textContent = pickedColor;
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colours[i];
    // Reset the button text
    resetButton.textContent = "Restart";
    // Clear the message
    resultMessage.textContent = "";
    // return the banner to the default colour
    banner.style.backgroundColor = defaultColour;
    }
   
}


//Write a function to make a random RGB color. For RGB colours are 
// made up of 3 values from 0 to 256. You should basically generate 3 random 
// numbers and create a string "rgb(0,0,0)" but replace the 0 with random values. 
//return that string
function makeColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
// Function to change all circles to the given colour
function changeColors(color) {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}



// Write a function that will set new values for the colours array.
// It should contain as many RGB color strings as there are circles
function genRandomColours(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColour());
    }
    return arr;
}


//return one of the 6 RGB colours you created and stored in colours
// Function to change all circles to the given colour
function chooseColor() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

// this function should set the colour you are guessing.

function setCircleColors(color) {
    circles.forEach(function(circle) {
        if (color) {
            circle.style.backgroundColor = color;
        } else {
            circle.style.backgroundColor = colours[circles.indexOf(circle)];
        }
    });
}

init();



