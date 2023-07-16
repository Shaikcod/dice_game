var randomNumber1= Math.round(Math.random() * 5) ;
var randomNumber2= Math.round(Math.random() * 5) ; 
array = ["./dice1.png","./dice2.png","./dice3.png","./dice4.png","./dice5.png","./dice6.png"]
var x = document.getElementById("img1").setAttribute("src",array[randomNumber1])

var x = document.getElementById("img2").setAttribute("src",array[randomNumber2])

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
} else {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"

}
