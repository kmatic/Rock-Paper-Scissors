let playerWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll("button");

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

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let playerMove = playerSelection.toLowerCase();
    let scoreText = "";
    const scores = document.querySelector("#scores");
    const container = document.querySelector("#container");
    const moves = document.createElement("div");
    const final = document.createElement("div");
    if (playerMove === "rock") {
        if (computerSelection === "Paper") {
            computerWins++;
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "You lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            playerWins++;
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "You win! Rock beats Scissors";
        } else {
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "Tie!";
        }
    } else if (playerMove === "paper") {
        if (computerSelection === "Rock") {
            playerWins++;
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "You win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            computerWins++;
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "You lose! Scissors beats Paper";
        } else {
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "Tie!";
        }
    } else {
        if (computerSelection === "Rock") {
            computerWins++;
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "You lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            playerWins++;
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "You win! Scissors beats Paper";
        } else {
            scoreText = "Player: " + playerWins + " Computer: " + computerWins
            moveText = "Tie!";
        }
    }
    if (playerWins == 5) {
        final.textContent = "THE PLAYER HAS WON THE GAME! Reload to play again";
        disableButtons();
    }
    else if (computerWins == 5) {
        final.textContent = "THE COMPUTER HAS WON THE GAME! Reload to play again";
        disableButtons();
    }
    scores.textContent = scoreText;
    moves.textContent = moveText;
    container.appendChild(moves);
    container.appendChild(final);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});
