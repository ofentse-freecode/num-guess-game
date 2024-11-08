//random num
var generateRandomNumber= function(){
    return secretNumber = Math.floor(Math.random() * 100) + 1;

};


var  getPlayerGuess = function(){
    userInput = prompt("Guess the secret number between 1 and 100");
    userInput = Number(userInput);

    while(true) {

        if(!isNaN(userInput) && userInput !== 0){
            //console.log(Number.isInteger(Number(guess)));
            break;
        } 
        else {
            userInput = prompt("Please enter a num")
        }
    };

    return Number.isInteger(userInput);

};
//getPlayerGuess();


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









///
// Function to run the main game logic
function game() {
   //const correctNumber = generateRandomNumber();// Generate random number

   
    // Initialize attempt counter
    let attempts = 0;
    const maxAttempts = 10;
    let playerWon = false;
    
    // Game loop for guessing
    while (attempts < maxAttempts) {
        const playerGuess = getPlayerGuess();
        //function name getPlayerGuess
        attempts++;
        
        const result = checkGuess(playerGuess, correctNumber);
        console.log(result);  // Output result to console (in place of alert)
       // userInput= prompt(`${result}`);
        
        if (result === "Correct! You guessed the number.") {
            alert=("you won")
            playerWon = true;
            break;  // Exit loop if the player guessed correctly
        }
        
        console.log(`Attempts left: ${maxAttempts - attempts}`);
    }
    
    // Determine outcome
    if (playerWon) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        let score = Math.max(0, 100 - attempts * 10);  // Reward with points based on attempts
        console.log(`Your score: ${score} points.`);
    } else {
        console.log("Sorry, you lost! The correct number was: " + secretNumber);
        console.log(`Attempts used: ${attempts}`);
    }
}


game();//calling the game function to start the game



/*function game(){

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
game();*/
