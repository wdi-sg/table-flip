var secretWord = ['c', 'a', 't']
var correct = [];
var totalGuesses = [];
var incorrect = []
var status;
var added = false;
var emoji = ["(", "╯", "ರ", "~", "ರ", ")", "╯", "︵", "┻", "━", "┻"]
var tableflip = [];

document.getElementById(`output`).innerText = `To guess the word, please enter a single letter at a time.`

function clearInput() {
    document.getElementById('input').value = "";
}
var inputHappened = function(currentInput) {
    var output;
    clearInput();
    //Define output statement format.
    //If user did not enter only one letter, end the function here.
    if (currentInput.length !== 1) {
        return output = `Sorry, please only enter one letter at a time.`
    }

    totalGuesses.push(currentInput);
    //If the currentInput matches a letter in secretWord, add it to the correct array.
    for (var i = 0; i < secretWord.length; i++) {
        if (currentInput === secretWord[i]) {
            correct.push(currentInput);
            status = `You have guessed correctly.`;
            added = true;
        }
    }
    //If no letters got added to the correct array, add letter to incorrect array.
    if (added === false) {
        incorrect.push(currentInput);
        tableflip.push(emoji.shift());
        status = `You have guessed incorrectly.`;
    }
    //Check if user has either won or lost the game.
    if (correct.length === secretWord.length) {
        return output = `Congratulations, you have guessed the word: ${secretWord.join("")}!`
    } else if (tableflip.length === 10) {
        return output = `${tableflip.join("")} You lost!`
    }
    //Reset the status of whether letters were added.
    added = false;
    return output = `${status} Your total correct guesses so far: ${correct.join(", ")}. Your incorrect guesses so far: ${incorrect.join(", ")}. Table flip status: ``${tableflip.join("")}`;
;
};
