
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let number = Math.random() * 11;
    if(number <= 3){
        return "rock";
    } else if( number > 3 && number <=6){
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice(){
    let message = prompt("rock , paper or scissors?"); // ask user 
    message = message.toLowerCase(); // ensures answer is not case-sensitive

    if(message == "rock"){
        return "rock";
    } else if (message == "paper"){
        return "paper";
    } else if (message == "scissors"){
        return "scissors";
    } else {
        return "try again";
    }; 
    

}



function playRound(humanChoice,computerChoice){
    
    humanChoice = humanChoice.toLowerCase();
    console.log("humanChoice = ", humanChoice);
    console.log("computerChoice = ", computerChoice);

    if(humanChoice == "rock" && computerChoice == "scissors" ||humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        return "Player Wins ! Score is : " +  humanScore;
    } else if(computerChoice == "rock" && humanChoice == "scissors" ||computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++
        return "Computer wins! Score is: " + computerScore;
    } else if (humanChoice == computerChoice) {
        return "Tie ! No one Wins :("
    }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



console.log(playRound(humanSelection, computerSelection));



