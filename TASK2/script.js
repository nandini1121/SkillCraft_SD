let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let bestScore = localStorage.getItem("bestScore");

if(bestScore){
document.getElementById("bestScore").textContent = bestScore;
}

function checkGuess(){

const guess = Number(
document.getElementById("guessInput").value
);

const message =
document.getElementById("message");

if(!guess){
message.textContent = "enter a valid number";
return;
}

attempts++;

document.getElementById("attempts").textContent =
attempts;

if(guess === secretNumber){

message.textContent =
`🎉 correct! number was ${secretNumber}`;

if(!bestScore || attempts < bestScore){

bestScore = attempts;

localStorage.setItem(
"bestScore",
attempts
);

document.getElementById("bestScore").textContent =
attempts;
}

}
else if(Math.abs(secretNumber - guess) <= 3){

if(guess < secretNumber){
message.textContent =
"🔥 super close... try a little higher";
}
else{
message.textContent =
"🔥 super close... try a little lower";
}

}
else if(guess < secretNumber){

message.textContent =
"⬆ try higher";

}
else{

message.textContent =
"⬇ try lower";

}
}

function restartGame(){

secretNumber =
Math.floor(Math.random()*100)+1;

attempts = 0;

document.getElementById("attempts").textContent = 0;

document.getElementById("guessInput").value = "";

document.getElementById("message").textContent =
"Make your first guess!";
}