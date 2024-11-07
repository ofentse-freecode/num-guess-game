//random num
var generateRandomNumber= function(){
    return secretNumber = Math.floor(Math.random() * 100);

};
console.log(generateRandomNumber());

var  getPlayerGuess = function(){
    while(true) {
        userInput = prompt("Guess the secret number between 1 and 100");

        if(!isNaN(userInput) && userInput !== ""){
            //console.log(Number.isInteger(Number(guess)));
            break;
        }else {
            userInput = prompt("Please enter a num")
        }
    };

    return Number.isInteger(Number(userInput));
// console.log("you entered a valid num.")
};
getPlayerGuess();












///
// Function to run the main game logic
function game() {
    const correctNumber = generateRandomNumber();// Generate random number
    
    // Initialize attempt counter
    let attempts = 0;
    const maxAttempts = 6;
    let playerWon = false;
    
    // Game loop for guessing
    while (attempts < maxAttempts) {
        const playerGuess = getPlayerInput();
        attempts++;
        
        const result = checkGuess(playerGuess, correctNumber);
        console.log(result);  // Output result to console (in place of alert)
        
        if (result === "Correct! You guessed the number.") {
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
        console.log("Sorry, you lost! The correct number was: " + correctNumber);
        console.log(`Attempts used: ${attempts}`);
    }
}


//game();//calling the game function to start the game

