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

    return Number.isInteger(Number(guess));
// console.log("you entered a valid num.")
};
getPlayerGuess();