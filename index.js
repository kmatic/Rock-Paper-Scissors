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

const computerSelect = computerPlay();
console.log(computerSelect);