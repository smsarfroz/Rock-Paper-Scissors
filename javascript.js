
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

function getHumanChoice() {
    let input = prompt("what's your choice ?")
    input = input.toLowerCase();
    if (input !== "rock" && input !== "paper" && input !== "scissors") {
        return "Please input valid choice";
    }
    return input;
}

// console.log(getHumanChoice());

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    // do I have to hard code all the cases or is there a better way ? 
    //rock beats scissors
    //scissors beats paper 
    //paper beats rock
    //when does humanChoice win ? 
    console.log("here", humanChoice, computerChoice);
    console.log((humanChoice === "rock"));
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("case1");
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (

        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice == "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("case2");
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
        console.log("case3");
        console.log(humanChoice, computerChoice);
        console.log((humanChoice === computerChoice));
    }
}


function playGame() {

    //play 5 rounds 
    for (let i = 0; i < 5; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        console.log("Congrats, Human! You Won.");
    }else{
        console.log("Computer has won the game.");
    }
}

playGame();