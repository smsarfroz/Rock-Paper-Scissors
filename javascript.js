/*
what is third button for ? to play a game ? 
what is a playerSelection ? 
when human selects rock button then this selection will be 
stored somewhere
*/
function getComputerChoice() {
    let g = Math.random();
    if (g <= 1 / 3) {
        return "rock";
    } else if (g <= 2 / 3) {
        return "paper";
    } else {
        return "scissors"
    }
}

// console.log(getComputerChoice());

// function getHumanChoice() {
//     let input = prompt("what's your choice among rock, paper and scissor ?")
//     input = input.toLowerCase();
//     if (input !== "rock" && input !== "paper" && input !== "scissors") {
//         return "Please input valid choice";
//     }
//     return input;
// }

// console.log(getHumanChoice());

humanScore = 0;
computerScore = 0;

const container = document.querySelector('#container');
const showResult = document.createElement("div");
const showScore = document.createElement("div");

function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase();
    //do I have to hard code all the cases or is there a better way ? 
    //rock beats scissors
    //scissors beats paper 
    //paper beats rock
    //when does humanChoice win ? 
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        showResult.textContent = `You win! ${humanChoice} beats ${computerChoice}. Scorecard: ${humanScore} : ${computerScore}`;
        // console.log();
    } else if (

        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice == "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        showResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Scorecard: ${humanScore} : ${computerScore}`;
        // console.log();
    } else {
        showResult.textContent = `Draw! Both choices are ${humanChoice}. Scorecard: ${humanScore} : ${computerScore}`;
        console.log(humanChoice, computerChoice);
        console.log((humanChoice === computerChoice));
    }
    container.appendChild(showResult);
}

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

let humanSelection;
btn1.addEventListener('click', () => {
    humanSelection = "rock";
});
btn2.addEventListener('click', () => {
    humanSelection = "paper";
});
btn3.addEventListener('click', () => {
    humanSelection = "scissors";
})
console.log(humanSelection);

function playGame() {

    //play 5 rounds 
    // const humanSelection = getHumanChoice();
    console.log("inside playgame function");
    console.log(humanSelection);
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    if (humanScore + computerScore === 5) {
        if (humanScore > computerScore) {
            showScore.textContent = `Congrats, Human! You Won. Final Score: ${humanScore} : ${computerScore}`;
            // prompt();
        } else if (humanScore < computerScore) {
            showScore.textContent = `Computer has won the game. Final Score: ${humanScore} : ${computerScore}`;
            // prompt();
        }
        container.appendChild(showScore);

    }
}

// playGame();

btn4.addEventListener('click', () => {
    console.log("play button clicked");
    playGame();
});

