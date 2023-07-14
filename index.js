var randomNumber1= Math.round(Math.random() * 5) ;
var randomNumber2= Math.round(Math.random() * 5) ; 
array = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
var x = document.getElementById("img1").setAttribute("src",array[randomNumber1])

var x = document.getElementById("img2").setAttribute("src",array[randomNumber2])

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
} else {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"

}