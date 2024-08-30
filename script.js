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


    let message = prompt("rock , paper or scissors?");
    if(message == "rock"){
        return "rock";
    } else if (message == "paper"){
        return "paper";
    } else if (message == "scissors"){
        return "scissors";
    } else {
        return "try again :)";
    }



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



