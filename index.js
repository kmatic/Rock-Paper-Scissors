function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
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
            console.log("You lose! Paper beats Rock");
            return "L";
        } else if (computerSelection === "Scissors") {
            console.log("You win! Rock beats Scissors"); 
            return "W";
        } else {
            console.log("Tie!");
            return "T";
        }
    } else if (playerMove === "paper") {
        if (computerSelection === "Rock") {
            console.log("You win! Paper beats Rock");
            return "W";
        } else if (computerSelection === "Scissors") {
            console.log("You lose! Scissors beats Paper");
            return "L";
        } else {
            console.log("Tie!");
            return "T";
        }
    } else {
        if (computerSelection === "Rock") {
            console.log("You lose! Rock beats Scissors");
            return "L";
        } else if (computerSelection === "Paper") {
            console.log("You win! Scissors beats Paper");
            return "W";
        } else {
            console.log("Tie!");
            return "T";
        }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?", "Rock")
        let result = playRound(playerSelection, computerPlay());
        if (result === "W") {
            playerWins++;
        } else if (result === "L") {
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        console.log("The player wins!");
    } else if (computerWins > playerWins) {
        console.log("The computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

game();