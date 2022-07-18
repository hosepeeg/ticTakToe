//-------------------Creating all element selectors-------------------
const playerButton = document.getElementById("player");
const aiButton = document.getElementById("AI");
const restart = document.getElementById("reset-button");




//-------------------creating global variables-------------------
let versus = "";




//-------------------event handlers-------------------
document.querySelector('#player').addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    versus = playerButton.innerHTML;
});

document.querySelector('#AI').addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    versus = aiButton.innerHTML;
});

document.querySelector('#reset-button').addEventListener("click", function(){
    window.location.reload();
});