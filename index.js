function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);
    if (rand === 1) {
        return "Rock";
    } else if (rand === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();
    if (playerMove === "rock") {
        if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You win! Rock beats Scissors"; 
        } else {
            return "Tie!";
        }
    } else if (playerMove === "paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper";
        } else {
            return "Tie!";
        }
    } else {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "Tie!";
        }
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));