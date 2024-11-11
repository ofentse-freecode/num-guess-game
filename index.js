function generateRandomNumber() {
  return (secretNumber = Math.floor(Math.random() * 100) + 1);
}

function getPlayerGuess() {
  let ValidateUserInput = false;
  let userInput;
  while (!ValidateUserInput) {
    let userNumber = prompt("Guess the secret number between 1 and 100");
    if (userNumber === null) {
      return null; // added function to check if user wants to exit and return null
    }
    userInput = parseInt(userNumber, 10) 
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
      alert("Invalid input. Please enter a valid number between 1 and 100.");
    } else {
      ValidateUserInput = true;
    }
  }
  return userInput;
}

function checkGuess(userInput, secretNumber) {
  if (userInput == secretNumber) {
    return (result = `Correct! You guessed the number. ${userInput}`);
  } else if (secretNumber > userInput) {
    return (result = "Its Higher than that guess again");
  } else if (secretNumber < userInput) {
    return (result = "Its Lower than that, guess again");
  }
}

function game() {
  const secretNumber = generateRandomNumber();
  let attempts = 0;
  const maxAttempts = 10;
  let playerWon = false;

  while (attempts < maxAttempts) {
    userInput = getPlayerGuess();
    if (userInput === null) {
      alert("Thanks for playing! Exiting the game.");
      return;
    }

    attempts++;
    const result = checkGuess(userInput, secretNumber);
    alert(result);

    if (result == `Correct! You guessed the number. ${userInput}`) {
      playerWon = true;
      break;
    } else {
      alert(`Attempts left: ${maxAttempts - attempts}`);
    }
  }
  if (playerWon) {
    alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
    let score = Math.max(0, 100 - attempts * 10); // Rewarding player with points based on attempts
    alert(`Your score: ${score} points.`);
  } else {
    alert("Sorry, you lost! The correct number was: " + secretNumber);
    alert(`Attempts used: ${attempts}`);
  }
}
game();
