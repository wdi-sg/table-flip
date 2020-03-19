console.log("hello script js");

//Setting up variables to use
var secretWords = [['c','a','t'], ['d','o','g','g','y'], ['a','l','p','h','a','b','e','t']]
var currentLevel = 0;
var secretWord = secretWords[currentLevel];
var tableFlip = ['(', '╯', 'ರ', '~', 'ರ',')', '╯', '︵', ' ', '┻', '━', '┻'];
var currentTableFlip = [];
var correctlyGuessedLetters = [];
var wronglyGuessedLetters = 0;

document.querySelector('#output').innerText = `Please pick a letter. You cannot guess the same letter twice.\n\nThere are three levels to this game.\n\nYou are on level ${currentLevel + 1}`;
//function to check if letter is correct
//could alternatively use a loop, but this seems more concise
var letterCheck = function(letter){
    if (secretWord.includes(letter)){
        return true;
    } else  {
        return false;
    }
}

var clearInput = function(){
    document.getElementById('input').value = "";
}

var inputHappened = function(currentInput){
    console.log( currentInput );

    var output;

//checking if letter is correct
    var letterIsCorrect = letterCheck(currentInput);

//if letter is correct, or not
    if (letterIsCorrect){
        correctlyGuessedLetters.push(currentInput);
        secretWord = secretWord.filter(letter => letter !== currentInput);
    } else {
        currentTableFlip.push(tableFlip[wronglyGuessedLetters])
        wronglyGuessedLetters++;
    }

 //if letter is correct, but game is not won
    if (letterIsCorrect && secretWord.length > 0){
        output = `You guessed right! These are the letters you have guessed right so far \n ${correctlyGuessedLetters.join(' ')}`;
    }
//if letter is correct, and game is won
    else if (letterIsCorrect && secretWord.length === 0){
        if (currentLevel !== 2){
            output = `You have won! Congratulations! The secret word was.... \n\n${secretWords[currentLevel].join("")}! \n\nOnto level ${currentLevel + 2}`;
            currentLevel++;
            secretWord = secretWords[currentLevel];
            correctlyGuessedLetters = [];
        } else {
            output = `You have won the final level! Congratulations! The secret word was.... \n\n ${secretWords[currentLevel].join("")}!`
        }
    }
//if letter is wrong, but game is not lost
    else if (!letterIsCorrect && currentTableFlip.length < tableFlip.length){
        output = currentTableFlip.join('');
    }
//if letter is wrong, and game is lost
    else if (!letterIsCorrect && currentTableFlip.length === tableFlip.length) {
        output = `${currentTableFlip.join('')} \n Game Over!`
    }
//error catch
    else {
        output = "error in main function"
    }

    clearInput();
    return output;
};