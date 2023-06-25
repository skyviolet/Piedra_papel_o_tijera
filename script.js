const options = ["paper", "rock", "scissor"]
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
function winner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")
     ){
        return "player";
     }
     else {
        return "computer";
     }
}
function round (playerSelection, computerSelection){
    const result = winner(playerSelection, computerSelection);
    if (result == "tie"){
        return "It's a tie!";
    }
    else if (result == "player"){
        return "You win!";
    }
    else {
        return "I win :p";
    }
}
round()
function playerchoice(){
    let imput = false;
    while(imput == false){
        const choice = prompt("Rock Paper Scissor");
        if (choice == null){
            continue;
        }
    const lower = choice.toLowerCase();
    if (options.includes(lower)){
        imput = true;
        return lower;
    }
    }
}
function game(){
    let scoreplayer = 0;
    let scorecomputer = 0;
    console.log('Welcome!');
    for (let i=0; i<5; i++){
        const playerSelection = playerchoice();
        const computerSelection = getComputerChoice();
        console.log(round(playerSelection, computerSelection));
        console.log("________")
        if (winner(playerSelection, computerSelection) == "player") {
            scoreplayer++;
        }
        else if (winner(playerSelection, computerSelection) == "computer") {
            scorecomputer++;
        }
        }
        console.log("GAME OVER")
        if (scoreplayer > scorecomputer){
            console.log("You are the winner ¡CONGRATULATIONS!");
        }
        else if (scorecomputer > scoreplayer) {
            console.log("I'm the winner :p");
        }
        else {
            console.log("We have a tie");
        }
    }
    
game()
