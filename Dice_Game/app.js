var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

const img1 = document.getElementsByClassName("img1");
const img2 = document.getElementsByClassName("img2");
const player1 = document.getElementsByTagName("p")[0];
const player2 = document.getElementsByTagName("p")[1];

img1[0].setAttribute("src",randomDiceImage1);
img2[0].setAttribute("src",randomDiceImage2);

if(randomNumber1 > randomNumber2){
    player1.style.color="white";
    player1.style.border="2px solid red";
    player1.innerHTML="Player 1 wins!!";
}
else{
    player2.style.color="white";
    player2.style.border="2px solid red";
    player2.innerHTML="Player 2 wins!!";
}