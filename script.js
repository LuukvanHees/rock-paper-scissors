/* Script */
console.log("Hello World")

/* DETERMINE a random number */


/* DETERMINE a random numerical value*/
function computerChoice(){
    let text = Math.random;
    /* IF random numerical value is below 0.33 THEN return rock */
    if (Math.random() <0.33){
        text = "Rock";
    }
    /* IF random numerical value is below 0.66 THEN return rock */
    else if (Math.random() <0.66){
        text = "Paper";
    }
    /* ELSE return scissors */
    else {
        text = "Scissors"
    }
    /* PRINT computer choice */
    console.log(text)
}

computerChoice()

function getHumanChoice(){
    let choice = prompt ("Choose rock, paper, or scissors");
    /* IF user input value is equal to rock THEN return rock */
    if (choice.toLowerCase() === "rock"){
        choice = "Rock"
        alert("You've chosen rock")
    }
    /* IF user input value is equal to paper THEN return paper */
    else if (choice.toLowerCase() === "paper"){
        choice = "Paper"
        alert("You've chosen paper")
    }
    /* IF user input value is equal to scissors THEN return scissors */
    else if (choice.toLowerCase() === "scissors"){
        choice = "Scissors"
        alert("You've chosen scissors")
    }
     /* ELSE return invalid input */
     else {
       alert("You've entered invalid input")
       getHumanChoice()
    }
    /* PRINT human choice */
    console.log(choice)
}

getHumanChoice()
