console.log("hello script js");

//Setting up variables to use
var wordLevelOne = "cat";
var wordLevelTwo = "doggy";
var wordLevelThree = "alphabet";

var secretWords = [wordLevelOne.split(''), wordLevelTwo.split(''), wordLevelThree.split('')]
var currentLevel = 0;
var secretWord = secretWords[currentLevel];
var tableFlip = ['┳','━','┳',
                 '(','ರ', '~', 'ರ', '）', '┳', '━', '┳',
                 '(', '╯', 'ರ', '~', 'ರ',')', '╯', '︵', ' ', '┻', '━', '┻'];
var currentTableFlip = [];
var correctlyGuessedLetters = new Array(secretWord.length).fill('_');

var wrongLetterCounter = 0;
var correctLetterCounter = 0;

var adminMode = false;

document.querySelector('#output').innerText = `Please pick a letter.\n\nThere are three levels to this game.\n\nYou are on level ${currentLevel + 1}`;
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

//admin mode functionality
    if (currentInput === "admin"){
        adminMode = true;
        clearInput();
        return "You are now in admin mode. Key in words to add different levels"
    }
    if (adminMode === true){
        if (currentInput === "endadmin"){
            adminMode = false;
            clearInput();
            return "Left admin mode";
        }
        secretWords.push(currentInput.split(''))
        clearInput();
        return `Feel free to key in more words. There are ${secretWords.length} levels now`;
    }

//checking if letter is correct
    var letterIsCorrect = letterCheck(currentInput);

//if letter is correct, or not
    if (letterIsCorrect){
        //iterate over secretWord again
        for (let i = 0; i < secretWord.length; i++){
            if (secretWord[i] === currentInput){
                correctlyGuessedLetters[i] = currentInput;
                correctLetterCounter++;
            }
        }
    } else {
        if (wrongLetterCounter === 3 || wrongLetterCounter === 11){
            currentTableFlip =[];
        }
        currentTableFlip.push(tableFlip[wrongLetterCounter])
        wrongLetterCounter++;
    }

 //if letter is correct, but game is not won
    if (letterIsCorrect && correctLetterCounter < secretWord.length){
        output = `You guessed right! These are the letters you have guessed right so far \n ${correctlyGuessedLetters.join(' ')}`;
    }
//if letter is correct, and game is won
    else if (letterIsCorrect && correctLetterCounter === secretWord.length){
        if (currentLevel !== secretWords.length - 1){
            output = `You have won! Congratulations! The secret word was.... \n\n${correctlyGuessedLetters.join("")}! \n\nOnto level ${currentLevel + 2}`;
            currentLevel++;
            secretWord = secretWords[currentLevel];
            correctlyGuessedLetters = new Array(secretWord.length).fill('_');
            correctLetterCounter = 0;
        } else {
            output = `You have won the final level! Congratulations! The secret word was.... \n\n ${correctlyGuessedLetters.join("")}!\n\nRefresh the page to reset the game`
        }
    }
//if letter is wrong, but game is not lost
    else if (!letterIsCorrect && currentTableFlip.length < 12){
        output = currentTableFlip.join('');
    }
//if letter is wrong, and game is lost
    else if (!letterIsCorrect && currentTableFlip.length === 12) {
        output = `${currentTableFlip.join('')} \n Game Over!`;
    }
//error catch
    else {
        output = "Try Again?";
    }

    clearInput();
    return output;
};