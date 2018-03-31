
//letters the computer chooses
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for user guess, wins, losses and letters already guessed
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

//computer guess
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("computer" + computerGuess);
//place to store user and computer guess
// var userGuess = "";
// var computerGuess = "";


//user guess being registered
document.onkeyup = function(event) {
    //user guess
    var userGuess = event.key;
    console.log("user" + userGuess);
    //computer guess
    

    //if user guess equals computer guess, game over
    if (userGuess===computerGuess) {
        wins++
        alert ("You have the gift of clairvoyance.");
        //guesses go back to 9 and letter selection empties
        guessesLeft=9;
        lettersGuessed=[];
        //new random letter
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    else {
        //if user guess doesn't match, letter is added to letters guessed
        lettersGuessed[lettersGuessed.length]=userGuess;
        //guess is taken away from guesses left
        guessesLeft--;
    }

    //when user guesses get to 0...
    if (guessesLeft == 0) {
        //adds to losses
        losses++;
        alert("You don't have the gift...try again?");
        //guesses go back to 9 and letter selection empties
        guessesLeft=9;
        lettersGuessed=[];
        //new random number
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

//showing everything in the HTML

var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Letters guessed so far: " + lettersGuessed + "</p>";


    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;


// document.querySelector("wins").innerHTML = 'Wins: ' + wins;
// document.querySelector("losses").innerHTML = 'Losses: ' + losses;
// document.querySelector("guessesLeft").innerHTML = 'Guesses Left: ' + guessesLeft;
// document.querySelector("lettersGuessed").innerHTML = 'Letters guessed so far: ' + lettersGuessed.join(', ');
 };
