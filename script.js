console.log("Hello World! ")

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
    // put out a message to user 
    // get user input 
    // write if statement return rock , paper or scissors 


    let message = prompt("rock , paper or scissors?"); // ask user 
    message = message.toLowerCase(); // ensures answer is not case-sensitive



    while (message == null){
        message = prompt("rock , paper or scissors")
    } // ensures answer is put into prompt ! 



    if(message == "rock"){
        return "rock";
    } else if (message == "paper"){
        return "paper";
    } else if (message == "scissors"){
        return "scissors";
    } else {
        // while(prompt( "try again :)")); // validation of input => could be next time turn into a function itself maybe 
        return "try again";
    }; 
    


// could alternatively do switch statement ! 
    // switch(message){
    //     case "rock":
    //         return "rock";
    //         break;
    //     case "paper":
    //         return "paper";
    //         break;
    //     case "scissors":
    //         return "scissors";
    //         break;
    //     default:
    //         return "try again :)"
    // }

}

console.log(getHumanChoice());

function playRound(humanChoice,computerChoice){
  


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



