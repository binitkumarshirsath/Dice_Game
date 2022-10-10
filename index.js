// Dice 1 value
var roll1 = 6 * Math.random();
roll1 = Math.floor(roll1);
roll1 = roll1 + 1;

// Dice 2 value
var roll2 = 6 * Math.random();
roll2 = Math.floor(roll2);
roll2 = roll2 + 2;

if(roll1 == 1){
    document.getElementById("image1").src='./images/dice1.png';
}else if(roll1 == 2){
    document.getElementById("image1").src='./images/dice2.png';
}else if(roll1 == 3){
    document.getElementById("image1").src='./images/dice3.png';
}else if(roll1  == 4){
    document.getElementById("image1").src='./images/dice4.png';
}else if(roll1 == 5){
    document.getElementById("image1").src='./images/dice5.png';
}else{
    document.getElementById("image1").src='./images/dice6.png';
}

if(roll2 == 1){
    document.getElementById("image2").src='./images/dice1.png';
}else if(roll2 == 2){
    document.getElementById("image2").src='./images/dice2.png';
}else if(roll2 == 3){
    document.getElementById("image2").src='./images/dice3.png';
}else if(roll2  == 4){
    document.getElementById("image2").src='./images/dice4.png';
}else if(roll2 == 5){
    document.getElementById("image2").src='./images/dice5.png';
}else{
    document.getElementById("image2").src='./images/dice6.png';
}

if(roll1 > roll2){
    document.querySelector("h2").innerHTML = "🏆 Player 1 won !";
}else if(roll1 < roll2){
    document.querySelector("h2").innerText = "Player 2 won ! 🏆";
}else{
    document.querySelector("h2").innerText = " ➰ Its a tie ➰!";
}