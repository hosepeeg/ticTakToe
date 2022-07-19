//-------------------Creating all element selectors-------------------
const playerButton = document.getElementById("player");
const aiButton = document.getElementById("AI");
const restart = document.getElementById("reset-button");
const cells = Array.from(document.querySelectorAll(".cell"));
const playerDisplay = document.querySelector(".turn");



//-------------------creating global variables-------------------
let winnerText = "";
let board = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = 'X';
let isGameActive = true;
const PLAYERX_WON = 'Player X wins!';
const PLAYERO_WON = 'Player O wins!';

/*
    Indexes in board (visual)
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]
*/

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

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

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        winnerText = currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON;
        isGameActive = false;
        return;
    }

    if (!board.includes(''))
        isGameActive = false;
}

const isValidAction = (cell) => {
    if (cell.innerText === 'X' || DocumentTimeline.innerText === 'O'){
        return false;
    }
    return true;
}

const changePlayer = () => {
    playerDisplay.classList.remove('player${currentPlayer}');
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = 'Player '+ currentPlayer + "'s " + "turn";
    playerDisplay.classList.add('player${currentPlayer}');

}

const updateBoard = (index) => {
    board[index] = currentPlayer;
}


const userAction = (cell, index) => {
    if(isValidAction(cell) && isGameActive) {
        cell.innerText = currentPlayer;
        cell.classList.add('player${currentPlayer}');
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
    if(isGameActive === false)
        playerDisplay.innerText = winnerText;
}

cells.forEach( (cell, index) => {
    cell.addEventListener('click', () => userAction(cell, index));
});