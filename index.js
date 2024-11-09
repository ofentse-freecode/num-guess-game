var generateRandomNumber= function(){
    return secretNumber = Math.floor(Math.random() * 100) + 1;

};

let attempts = 10; 


var  getPlayerGuess = function(){
    userInput = prompt("Guess the secret number between 1 and 100");
    userInput = Number(userInput);

    while(true) {

        if(!isNaN(userInput) && userInput !== 0){
            break;
        } 
        else {
            userInput = prompt("Please enter a number")
        }
    };

    return Number.isInteger(userInput);

};

var checkGuess = function(userInput, secretNumber) {
   
    
    if(userInput == secretNumber){
        return result = "Correct! You guessed the number."
        
    } else if(secretNumber > userInput){
        return result = "Its Higher than that guess again";

    }else if( secretNumber < userInput){
         return result = "Its Lower than that, guess again";
    }

    
};




function game(){

    generateRandomNumber();
    getPlayerGuess();
    let attempts = 0;
    while(true){
       
        checkGuess(userInput, secretNumber);
        attempts++;
    
        if(result == "Correct! You guessed the number."){
            alert(`You guessed the number correctly! ${userInput} : ${secretNumber} with ${attempts} guesses Reload page to play again!`);
            break;
        }else if (result == "Its Higher than that guess again"){
            userInput = prompt("Its Higher than that guess again")
        }else if (result = "Its Lower than that, guess again"){
            userInput = prompt("Its Lower than that, guess again")
        }
    
    } 
    };
    game();
