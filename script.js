/* Script */
console.log("Hello World")

/* DETERMINE a random number */
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

/* PRINT text based on a numerical value */
function computerChoice(){
    let text;
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
    console.log(text)
}
computerChoice()