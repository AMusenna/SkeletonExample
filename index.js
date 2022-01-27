
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceeImage = ("dice" + randomNumber1 + ".png");

var randomDiceeImageSource = ("images/" + randomDiceeImage);

var img1 = document.querySelectorAll("img")["0"];

img1.setAttribute("src", randomDiceeImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceeImage2 = ("dice" + randomNumber2 + ".png");

var randomDiceeImageSource2 = ("images/" + randomDiceeImage2);

var img2 = document.querySelectorAll("img")["1"];

img2.setAttribute("src", randomDiceeImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " Play 2 Wins 🚩"
}
else {
    document.querySelector("h1").innerHTML = " 🚩 Draw 🚩"
}