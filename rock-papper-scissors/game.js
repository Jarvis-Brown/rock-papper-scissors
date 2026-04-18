// need to have array of rock paper or scissors
// need to pick from numbers 0 - 2 index of array
//return answer

/*
const userEnter = document.querySelector("#userEnter");
const log = document.querySelector("#log");
*/

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const body = document.querySelector("body");

let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

rockBtn.textContent = options[0];
paperBtn.textContent = options[1];
scissorsBtn.textContent = options[2];

body.append(rockBtn, paperBtn, scissorsBtn);

const getComputerChoice = (computerOption) => {
    computerOption = options[Math.floor(Math.random() * 3)];
    return computerOption;
};

/*
const getHumanChoice = () => {
    let userOption = window.prompt("Choose rock paper or scissors");

    if (userOption === null) return "invalid";

    userOption = userOption.toLowerCase();

    if (userOption === "rock") {
        return options[0];
    } else if (userOption === "paper") {
        return options[1];
    } else if (userOption === "scissors") {
        return options[2];
    } else {
        return "invalid";
    }
};
*/

rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});

const responseSection = document.createElement("div");
body.appendChild(responseSection);

const responseText = document.createElement("p");
responseSection.appendChild(responseText);

const score = document.createElement("h1");
body.prepend(score);
score.innerText = "";

const playRound = (humanChoice) => {
    const computerChoice = getComputerChoice();

    if (humanChoice === options[0] && computerChoice === options[0]) {
        responseText.innerText = "its a tie.";
    } else if (humanChoice === options[1] && computerChoice === options[1]) {
        responseText.innerText = "its a tie.";
    } else if (humanChoice === options[2] && computerChoice === options[2]) {
        responseText.innerText = "its a tie.";
    } else if (humanChoice === options[0] && computerChoice === options[1]) {
        computerScore += 1;
        responseText.innerText = "You Lose! Paper beats Rock.";
    } else if (humanChoice === options[0] && computerChoice === options[2]) {
        humanScore += 1;
        responseText.innerText = "You Win! Rock beats Paper.";
    } else if (humanChoice === options[1] && computerChoice === options[0]) {
        humanScore += 1;
        responseText.innerText = "You Win! Rock beats Paper.";
    } else if (humanChoice === options[1] && computerChoice === options[2]) {
        computerScore += 1;
        responseText.innerText = "You Lose! Scissors beats Paper.";
    } else if (humanChoice === options[2] && computerChoice === options[0]) {
        computerScore += 1;
        responseText.innerText = "You Lose! Rock beats Scissors.";
    } else if (humanChoice === options[2] && computerChoice === options[1]) {
        humanScore += 1;
        responseText.innerText = "You Win! Scissors beats Paper.";
    }

    score.innerText = `Your score is ${humanScore}. The CPU score is ${computerScore}`;

    if (humanScore === 5) {
        return (score.innerText = `You win the whole game! Final score — You: ${humanScore} | CPU: ${computerScore}`);
    } else if (computerScore === 5) {
        return (score.innerText = `the computer win the whole game! Final score — You: ${humanScore} | CPU: ${computerScore}`);
    }
};

/*
const playGame = () => {
    score.innerText = `Your score is ${humanScore}. The CPU score is ${computerScore}`;
    playRound();
    if (humanScore === 3) {
        return (score.innerText = "You win the whole game!");
    } else if (computerScore === 3) {
        return (score.innerText = "the computer win the whole game!");
    }
    return (score.innerText = `Game over! Final score — You: ${humanScore} | CPU: ${computerScore}`);
};

playGame();
*/
