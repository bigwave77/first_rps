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
        return 2;
    } else if (plyr === "rock" && comp === "paper") {
        return 0;
    } else if (plyr === "rock" && comp === "scissors") {
        return 1;
    } else if (plyr === "paper" && comp === "scissors") {
        return 0;
    } else if (plyr === "paper" && comp === "rock") {
        return 1;
    } else if (plyr === "scissors" && comp === "rock") {
        return 0;
    } else if (plyr === "scissors" && comp === "paper") {
        return 1;
    }
}

function game() {
    for (let i = 0; i < 5; i++){

        rndInt = randomIntFromInterval(1, 3);
        let computerSelection = getComputerChoice();
        let playerSelection = window.prompt("Enter your choice:");

        round = playRound(playerSelection, computerSelection);
        if (round === 1) {
            playerScore += 1;
        } else if (round === 0){
            computerScore += 1;
        }

        console.log(playerScore, computerScore)
    }

    if (playerScore > computerScore) {
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
    }
}

let playerScore = 0;
let computerScore = 0;
let rndInt = undefined;
game()
