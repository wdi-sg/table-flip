// console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   return "WOW SOMETHING HAPPEND";
// };
var wordLevelOne = "cat";


var secretWords = [wordLevelOne.split(''), ]
var currentLevel = 0;
var secretWord = secretWords[currentLevel];
var tableFlip = ['┳','━','┳',
                 '(','ರ', '~', 'ರ', '）', '┳', '━', '┳',
                 '(', '╯', 'ರ', '~', 'ರ',')', '╯', '︵', ' ', '┻', '━', '┻'];
var currentTableFlip = [];
var correctlyGuessedLetters = new Array(secretWord.length).fill('_');


var wrongLetterCounter = 0;
var correctLetterCounter = 0;
var letterCheck = function(letter){
    if (secretWord.includes(letter)){
        return true;
    } else  {
        return false;
    }
}
//check if letter has got there
var letterCheck = function(letter){
    if (secretWord.includes(letter)){
        return true;
    } else  {
        return false;
    }
}
var inputHappened = function(currentInput){
    console.log( currentInput );

    var letterIsCorrect = letterCheck(currentInput);

if (letterIsCorrect){

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

if (letterIsCorrect && correctLetterCounter < secretWord.length){
        output = `You guessed right! Doing great so far`;
    }

else if (letterIsCorrect correctLetterCounter === secretWord.length){ output= `You have won! Congratulations! `}


    else if (!letterIsCorrect && currentTableFlip.length < 12){
        output = "keep trying";
    }

    else if (!letterIsCorrect && currentTableFlip.length === 12) {
        output = `Game Over!`;}