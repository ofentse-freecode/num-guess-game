
function generateRandomNumber(){
    return secretNumber = Math.floor(Math.random() * 100) + 1;

};

function  getPlayerGuess(){
    let userInput = prompt("Guess the secret number between 1 and 100");
    userInput = Number(userInput);
    while(true) {
        if(!isNaN(userInput)){
            break;
        } else if(userInput == 0){
        userInput = alert=("Thanks for trying the game!");
        }
        else {
        userInput = prompt("Please enter a number");
        }
    };
    return userInput;
};

function checkGuess(userInput, secretNumber){
   
    if(userInput == secretNumber){
        return result = "Correct! You guessed the number."
        
    } else if(secretNumber > userInput){
        return result = "Its Higher than that guess again";

    }else if( secretNumber < userInput){
         return result = "Its Lower than that, guess again";
    }
    
};

function game(){

    const secretNumber= generateRandomNumber();
    //getPlayerGuess();
    let attempts = 0;
    userInput = getPlayerGuess();

    //let play = ""
    if(userInput == 0){
        alert("Thanks for playing");
    }else if(!isNaN(userInput)){
      
    
    while (true){
       // userInput = getPlayerGuess(); 

         result = checkGuess(userInput, secretNumber);
            attempts++;
    
         if(result == "Correct! You guessed the number."){
            alert(`You guessed the number correctly! ${userInput} : ${secretNumber} with ${attempts} guesses Reload page to play again!`);
                break;
            }else if (result == "Its Higher than that guess again"){
            userInput = prompt("Its Higher than that guess again")
            }else if (result == "Its Lower than that, guess again"){
            userInput = prompt("Its Lower than that, guess again")
            }
        
    }
    }
    
};
game();
