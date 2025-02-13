/* Script */
console.log("Welcome to this simple game of rock, paper, scissors. Enjoy!")

/* OBTAIN computer choice for rock, paper, or scissors based on a random numerical value */
function getComputerChoice(){
    /* DETERMINE a random numerical value */
    let computerChoice = Math.random;
    /* IF random numerical value is below 0.33 THEN return rock */
    if (computerChoice() <0.33){
        return "Rock";
    }
    /* IF random numerical value is below 0.66 THEN return paper */
    else if (computerChoice() <0.66){
        return "Paper";
    }
    /* ELSE return scissors */
    else {
        return "Scissors"
    }
}

/* OBTAIN user choice for rock, paper, or scissors based on a direct input via a prompt */
function getHumanChoice(){
    /* GET user input */
    let humanChoice = prompt ("Choose rock, paper, or scissors");
    /* IF user input value is equal to rock THEN return rock */
    if (humanChoice.toLowerCase() === "rock"){
        return "Rock"
    }
    /* IF user input value is equal to paper THEN return paper */
    else if (humanChoice.toLowerCase() === "paper"){
        return "Paper"
    }
    /* IF user input value is equal to scissors THEN return scissors */
    else if (humanChoice.toLowerCase() === "scissors"){
        return "Scissors"
    }
     /* ELSE return invalid input */
     else {
       alert("You've entered invalid input")
       return(getHumanChoice())
    }
}

/* SET human score to 0 */
let humanScore = 0;

/* SET computer score to 0 */
let computerScore = 0;

/* OBTAIN score attribution for user or computer comparison results */
function playRound(a, b){
    /* PRINT user choice */
    console.log("You chose " + a.toLowerCase());
    /* PRINT computer choice */
    console.log("The computer chose " + b.toLowerCase())
    /* IF user input is paper and computer input is rock THEN return user as winner */
    if ( a === "Paper" && b === "Rock")
        console.log("You win! Paper (you) beats rock (computer).");
    /* IF user input is paper and computer input is scissors THEN return computer as winner */
    else if ( a === "Paper" && b === "Scissors")
        console.log("You lose. Paper (you) doesn't beat scissors (computer).");
    /* IF user input is rock and computer input is paper THEN return computer as winner */
    else if ( a === "Rock" && b === "Paper")
        console.log("You lost! Rock (you) doesn't beat paper (computer).");
    /* IF user input is rock and computer input is scissors THEN return user as winner */
    else if ( a === "Rock" && b === "Scissors")
        console.log("You win! Rock (you) beats scissors (computer).");
    /* IF user input is scissors and computer input is paper THEN return user as winner */
    else if ( a === "Scissors" && b === "Paper")
        console.log("You win! Scissors (you) beats paper (computer).");
    /* IF user input is scissors and computer rock is rock THEN return computer as winner */
    else if ( a === "Scissors" && b === "Rock")
        console.log("You lose! Scissors (you) doesn't beat rock.");
    /* ELSE return it's a draw */
    else {
        console.log("It's a draw.");
    }
}

/* SET human choice to be equal to the output of the get human choice function */
let humanChoice = getHumanChoice();

/* SET computer choice to be equal to the output of the get computer choice function */
let computerChoice = getComputerChoice();

/* INIT play round function */
playRound(humanChoice, computerChoice);