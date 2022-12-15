function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


function getComputerChoice() {
    switch (rndInt) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(player, computer) {
    plyr = player.toLowerCase();
    comp = computer.toLowerCase();
    console.log(plyr, comp)
    if (plyr === comp) {
        return "It's a tie!";
    } else if (plyr === "rock" && comp === "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (plyr === "rock" && comp === "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (plyr === "paper" && comp === "scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (plyr === "paper" && comp === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (plyr === "scissors" && comp === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (plyr === "scissors" && comp === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

const rndInt = randomIntFromInterval(1, 3);
const computerSelection = getComputerChoice();
const playerSelection = "Rock";

console.log(playRound(playerSelection, computerSelection))
// console.log(computerSelection);