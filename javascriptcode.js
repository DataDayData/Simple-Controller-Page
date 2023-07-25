// Get the button element
var rec1 = document.getElementById("rectangular1");
// Set the button's position
rec1.style.position = "absolute";
rec1.style.left = "400px";
rec1.style.top = "15px";



// Save the button's original border color
var rec1BorderColor = rec1.style.borderColor;

// Change the button's border color and box shadow when the mouse is over the button
rec1.addEventListener("mouseover", function() {
  rec1.style.borderColor = "red";
  rec1.style.boxShadow = "0 0 10px red";
});

// Restore the button's original border color and box shadow when the mouse leaves the button
rec1.addEventListener("mouseout", function() {
  rec1.style.borderColor = rec1BorderColor; 
  rec1.style.boxShadow = "";
});

var stop1 = document.getElementById("stopp");
stop1.style.position = "absolute";
stop1.style.left = "400px";
stop1.style.top = "130px";


var stop1BorderColor = stop1.style.borderColor;

stop1.addEventListener("mouseover", function() {
stop1.style.borderColor = "red";
stop1.style.boxShadow = "0 0 10px red";
});

stop1.addEventListener("mouseout", function() {
stop1.style.borderColor = stop1BorderColor; 
stop1.style.boxShadow = ""; 
});

var left1 = document.getElementById("left");
left1.style.position = "absolute";
left1.style.left = "187px";
left1.style.top = "130px";


var left1BorderColor = left1.style.borderColor;

left1.addEventListener("mouseover", function() {
left1.style.borderColor = "red";
left1.style.boxShadow = "0 0 10px red";
});

left1.addEventListener("mouseout", function() {
left1.style.borderColor = left1BorderColor; // Set the original border-color value
left1.style.boxShadow = ""; // Remove the box-shadow
});

var right1 = document.getElementById("right");
right1.style.position = "absolute";
right1.style.left = "613px";
right1.style.top = "130px";

// Save the original border-color value as a variable
var right1BorderColor = right1.style.borderColor;

right1.addEventListener("mouseover", function() {
right1.style.borderColor = "red";
right1.style.boxShadow = "0 0 10px red";
});

right1.addEventListener("mouseout", function() {
right1.style.borderColor = right1BorderColor; // Set the original border-color value
right1.style.boxShadow = ""; // Remove the box-shadow
});

var backward1 = document.getElementById("backward");
backward1.style.position = "absolute";
backward1.style.left = "400px";
backward1.style.top = "245px";

// Save the original border-color value as a variable
var backward1BorderColor = backward1.style.borderColor;

backward1.addEventListener("mouseover", function() {
backward1.style.borderColor = "red";
backward1.style.boxShadow = "0 0 10px red";
});

backward1.addEventListener("mouseout", function() {
backward1.style.borderColor = backward1BorderColor; // Set the original border-color value
backward1.style.boxShadow = ""; // Remove the box-shadow
});






