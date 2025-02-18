/* Script */
/* PRINT start of game notification */
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

/* OBTAIN score attribution for user or computer */
function playRound(humanSelection, computerSelection){
    /* PRINT user choice */
    console.log("You chose " + humanSelection.toLowerCase());
    /* PRINT computer choice */
    console.log("The computer chose " + computerSelection.toLowerCase())
    /* IF user input is paper and computer input is rock THEN return user as winner */
    if ( humanSelection === "Paper" && computerSelection === "Rock"){
        /* PRINT result of play round */
        console.log("You win! Paper (you) beats rock (computer).");
        /* PRINT point attribution */
        console.log("You've been attributed a point.")
        /* INCREMENT user score */
        return (++humanScore);
    }
    /* IF user input is paper and computer input is scissors THEN return computer as winner */
    else if ( humanSelection === "Paper" && computerSelection === "Scissors"){
        /* PRINT result of play round */
        console.log("You lose. Paper (you) doesn't beat scissors (computer).");
         /* PRINT score overview */
        console.log("The computer has been attributed a point.")
         /* INCREMENT computer score */
         return (++computerScore);
    }
    /* IF user input is rock and computer input is paper THEN return computer as winner */
    else if ( humanSelection === "Rock" && computerSelection === "Paper"){
        /* PRINT result of play round */
        console.log("You lose. Rock (you) doesn't beat paper (computer).");
         /* PRINT score overview */
        console.log("The computer has been attributed a point.")
        /* INCREMENT computer score */
        return (++computerScore);
    }
    /* IF user input is rock and computer input is scissors THEN return user as winner */
    else if ( humanSelection === "Rock" && computerSelection === "Scissors"){
        /* PRINT result of play round */
        console.log("You win! Rock (you) beats scissors (computer).");
         /* PRINT score overview */
        console.log("You've been attributed a point.")
        /* INCREMENT user score */
        return (++humanScore);
    }
    /* IF user input is scissors and computer input is paper THEN return user as winner */
    else if ( humanSelection === "Scissors" && computerSelection === "Paper"){
        /* PRINT result of play round */
        console.log("You win! Scissors (you) beats paper (computer).");
         /* PRINT score overview */
        console.log("You've been attributed a point.")
         /* INCREMENT user score */
         return (++humanScore);
    }
    /* IF user input is scissors and computer rock is rock THEN return computer as winner */
    else if ( humanSelection === "Scissors" && computerSelection === "Rock"){
        /* PRINT result of play round */
        console.log("You lose. Scissors (you) doesn't beat rock.");
         /* PRINT score overview */
        console.log("The computer has been attributed a point.")
        /* INCREMENT computer score */
        return (++computerScore);
    }
    /* ELSE return it's a draw */
    else {
        /* PRINT result of play round */
        console.log("It's a draw.");
    }
}

/* PRINT accumulated score for five rounds */
function playGame(){
    /* WHILE the value for played rounds is below 5 keep calling the function and increasing the value incrementally */
    for (let numberOfRoundsPlayed = 0; numberOfRoundsPlayed <5; numberOfRoundsPlayed++){
        /* SET human choice to be equal to the output of the get human choice function */
        const humanChoice = getHumanChoice();
        /* SET computer choice to be equal to the output of the get computer choice function */
        const computerChoice = getComputerChoice();
        /* INIT play round function */
        playRound(humanChoice, computerChoice);
        /* PRINT current score overview */
        console.log("Your score is " + humanScore + " and the computer score is " + computerScore + ".");
    }
    /* IF user score value is more than computer score value THEN return user as winner of the game */
    if (humanScore > computerScore){
        /* PRINT final score overview */
        console.log("You won! The final score is " + humanScore + " point(s) for you and " + computerScore + " point(s) for the computer.");
    }
    /* IF user score value is less than computer score value THEN return computer as winner of the game */
    else if (humanScore < computerScore){
        /* PRINT final score overview */
        console.log("You lost. The final score is " + humanScore + " point(s) for you and " + computerScore + " point(s) for the computer.");
    }
    /* ELSE return it's a draw */
    else {
        /* PRINT final score overview */
        console.log("It's a draw. The final score is " + humanScore + " point(s) for you and " + computerScore + " point(s) for the computer.");
    }
    /* PRINT end of game notification */
    console.log("This game is now over. Reload the page to play again.")
}

/* INIT play game function */
playGame();