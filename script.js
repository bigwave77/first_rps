function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


function getComputerChoice(number) {
    switch (number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(plyr, comp) {
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

const title = document.querySelector("h1");
const winner = document.createElement("h3");
// const result = document.createElement("p");
let playerScore = 0;
let computerScore = 0;
let plS = document.getElementById("player-score");
let compS = document.getElementById("computer-score");


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let rndInt = randomIntFromInterval(1, 3);
        let computerSelection = getComputerChoice(rndInt);
        let round = playRound(playerSelection, computerSelection);
        if (round === 1) {
                playerScore += 1;
                plS = document.getElementById("player-score").innerText = playerScore;
            } else if (round === 0){
                computerScore += 1;
                compS = document.getElementById("computer-score").innerText = computerScore;
            }
        
        if (playerScore === 5) {
            winner.innerText = "You win!";
            title.appendChild(winner);
        } else if (computerScore === 5) {
            winner.innerText = "You lose!";
            title.appendChild(winner);
        }
    });
});

// game()
