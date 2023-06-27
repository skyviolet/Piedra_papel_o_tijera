const outcomeDiv = document.querySelector(".outcome")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")
const buttons = document.querySelectorAll("button")
const options = ["✋ paper", "✊ rock", "✌ scissor"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

let computerScore = 0;
let playerScore = 0;
function winner(playerSelection, computerSelection){
    const h3 = document.createElement("h3")
    h3.innerText = `Computer Selection: ${computerSelection}`
    const p = document.createElement("p")
    if (playerSelection === computerSelection) {
        p.innerText = `It's a tie! You both picked ${playerSelection}`
    }
    else if (
        (playerSelection === "✊ rock" && computerSelection === "✌ scissor") ||
        (playerSelection === "✋ paper" && computerSelection === "✊ rock") ||
        (playerSelection === "✌ scissor" && computerSelection === "✋ paper")
     ){
        playerScore ++
        p.innerText = `You won! ${playerSelection} wins ${computerSelection}`
     }
     else {
        computerScore ++
        p.innerText = `You lost! ${computerSelection} wins ${playerSelection}`
     }
     outcomeDiv.appendChild(h3)
     outcomeDiv.appendChild(p)
}

const checkForWinner = (playerScore, computerScore) => {
    const h2 =document.createElement("h2")
    if (playerScore === 3){
        h2.classList.add("player-won")
        h2.innerText = `You won ${playerScore} to ${computerScore}!!`
    }
    else if (computerScore === 3 ){
        h2.classList.add("computer-won")
        h2.innerText = `You lost ${playerScore} to ${computerScore}!!`
    }
    outcomeDiv.append(h2)
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score : ${computerScore}`
}

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const computerSelection = getComputerChoice()
        const playerSelection = `${button.className}`
        winner(playerSelection, computerSelection)
        updateScores(playerScore, computerScore)
        checkForWinner( playerScore, computerScore)
    })
})
