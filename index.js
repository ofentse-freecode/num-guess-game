//random num
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

/*function checkGuess(userInput , secretNumber) {
    if (userInput < secretNumber) {
        console.log("Too low! Try again.");
    } else if (userInput > secretNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations! You guessed the correct number:", secretNumber);
        return true; 
    }
    return false; 
}
*/
var checkGuess = function(userInput, secretNumber) {
   
    
    if(userInput == secretNumber){
        return result = "Correct! You guessed the number."
       // return result=`You guessed the number correctly! ${userInput} : ${secretNumber}  Reload page to play again!`;
        
    } else if(secretNumber > userInput){
        return result = "Its Higher than that guess again";

    }else if( secretNumber < userInput){
         return result = "Its Lower than that, guess again";
    }

    
};


// Function to run the main game logic
/*function game() {

   const targetNumber = generateRandomNumber()
    // Initialize attempt counter
    let playerWon = false;
    
    // Game loop for guessing
    while (attempts > 0) {

        let playerGuess = getPlayerGuess();

        if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
            console.log("Invalid input. Please enter a number between 1 and 100.");
            continue;
        }

        attempts--;
        
        const result = checkGuess(playerGuess, targetNumber);
        console.log(result);  // Output result to console (in place of alert)
       // userInput= prompt(`${result}`);
        
        if (result === "Correct! You guessed the number.") {
            alert=("you won")
            playerWon = true;
            break;  // Exit loop if the player guessed correctly
        }
        
        console.log(`Attempts left: ${ attempts}`);
    }

    if (attempts === 0) {
        console.log("Sorry, you've run out of attempts. The correct number was:", targetNumber);
    }
    
    // Determine outcome
    if (playerWon) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        let score = Math.max(0, 100 - attempts * 10);  // Reward with points based on attempts
        console.log(`Your score: ${score} points.`);
    } else {
        console.log("Sorry, you lost! The correct number was: " + targetNumber);
        console.log(`Attempts used: ${10}`);
    }
}


game();*/

function game(){

    generateRandomNumber();
    getPlayerGuess();
    //getPlayerGuess();
    
    let attempts = 0;
    //getPlayerGuess();
    
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
