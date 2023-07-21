//for dice number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
  
var randomDiceImage = "dice" + randomNumber1 + ".png";
 
var imageSource = "./images/" + randomDiceImage;

var setImage = document.querySelectorAll("img")[0];

setImage.setAttribute("src" , imageSource);

//for dice number 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
  
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
 
var imageSource2 = "./images/" + randomDiceImage2;

var setImage2 = document.querySelectorAll("img")[1];

setImage2.setAttribute("src" , imageSource2);
 
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Congratulations! Player 1 wins."
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Congratulations! Player 2 wins."
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw."
}