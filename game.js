// need to have array of rock paper or scissors
// need to pick from numbers 0 - 2 index of array
//return answer

/*
const userEnter = document.querySelector("#userEnter");
const log = document.querySelector("#log");
*/

let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

const getComputerChoice = (computerOption) => {
    computerOption = options[Math.floor(Math.random() * 3)];
    return computerOption;
};

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

const playRound = (humanChoice, computerChoice) => {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === options[0] && computerChoice === options[0]) {
        return "its a tie.";
    } else if (humanChoice === options[1] && computerChoice === options[1]) {
        return "its a tie.";
    } else if (humanChoice === options[2] && computerChoice === options[2]) {
        return "its a tie.";
    } else if (humanChoice === options[0] && computerChoice === options[1]) {
        computerScore += 1;
        return "You Lose! Paper beats Rock.";
    } else if (humanChoice === options[0] && computerChoice === options[2]) {
        humanScore += 1;
        return "You Win! Rock beats Paper.";
    } else if (humanChoice === options[1] && computerChoice === options[0]) {
        humanScore += 1;
        return "You Win! Rock beats Paper.";
    } else if (humanChoice === options[1] && computerChoice === options[2]) {
        computerScore += 1;
        return "You Lose! Scissors beats Paper.";
    } else if (humanChoice === options[2] && computerChoice === options[0]) {
        computerScore += 1;
        return "You Lose! Rock beats Scissors.";
    } else if (humanChoice === options[2] && computerChoice === options[1]) {
        humanScore += 1;
        return "You Win! Scissors beats Paper.";
    }
};

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const result = playRound();
        console.log(result);
        console.log(
            `Your score is ${humanScore}. The CPU score is ${computerScore}`,
        );
        playRound();
        if (humanScore === 3) {
            return "You win the whole game!";
        } else if (computerScore === 3) {
            return "the computer win the whole game!";
        }
    }
    return `Game over! Final score — You: ${humanScore} | CPU: ${computerScore}`;
};

playGame();
