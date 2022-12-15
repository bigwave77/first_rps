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
    console.log(rndInt)
}

const rndInt = randomIntFromInterval(1, 3)
console.log(getComputerChoice())