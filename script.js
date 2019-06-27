//Declaring global vairables
var wordBank = ['cat', 'doggy', 'alphabet'];
var level = 1
var secretWord = wordBank[level-1];
var noOfCharacters = secretWord.length;
var winCondition = 0;

var guessedWord = createEmpty(noOfCharacters);

var defaultHangman = stringSplit("(╯ರ ~ ರ）╯︵ ┻━┻");
var loseCondition = defaultHangman.length;
var hangman = '';
var usedAlphabets = [];


//Global display functions
var displayLives = function (){
    document.getElementById('lives').innerText=`${hangman}`;
};

var displayWordGuessed = function (){
    var output=guessedWord.join(' ');
    document.getElementById('word-guessed').innerText=`${output}`;
};
displayWordGuessed()

var displayMessage = function (data){
    document.getElementById('game-message').innerText=`${data}`;
};

var displayLevel = function (data){
    document.getElementById('level').innerText=`Game Level: ${level}`;
}

var clearField= function() {
    document.getElementById('alphabet').value = "";
}

//Global function for strings
function stringSplit(inputString) {
    inputString = inputString.split('');
    return inputString;
}

function createEmpty(number) {
    var str=[]
    for (var i=0; i<number;i++){
        str.push ('_');
    }
    return str;
}

// Level Up function
var levelUp = function (){
    level++;
    secretWord = wordBank[level-1];
    noOfCharacters = secretWord.length;
    winCondition = 0;

    guessedWord = createEmpty(noOfCharacters);
    defaultHangman = stringSplit("(╯ರ ~ ರ）╯︵ ┻━┻");
    loseCondition = defaultHangman.length;
    hangman = '';
    usedAlphabets = [];
    displayLevel();
    displayWordGuessed()
}

//Global Function for Word Check

var checkAlphabet = function(){
    var inputAlphabet=document.getElementById('alphabet').value;
    clearField();
    console.log(inputAlphabet);

    //Check win or lose {
    if(winCondition === noOfCharacters){
        displayMessage('You have won the game!');
        return;
    } else if(hangman.length === loseCondition){
        displayMessage('You have lost the game');
        return;
    }

    //Check input character
    //Check for 1 alphabet
    if (!isNaN(inputAlphabet) || inputAlphabet.length !== 1){
        displayMessage('Incorrect input. Please only input 1 Alphabet');
        return;
    }
    //check for used alphabet
    for (var i=0; i<usedAlphabets.length;i++) {
        if (inputAlphabet === usedAlphabets[i]){
            displayMessage('You have used this alphabet!');
            return;
        }
    }


    //Check secret word
    //Correct Character
    var enterCharacter = false;

    for (var i=0; i<secretWord.length;i++){
        if(inputAlphabet === secretWord[i]){
            usedAlphabets.push(inputAlphabet);
            guessedWord.splice(i,1,inputAlphabet);
            secretWord.splice(i,1," ");
            winCondition++;
            enterCharacter = true;
            displayWordGuessed();
            displayMessage('You have guessed a character!');
            if ((winCondition === noOfCharacters) && (level !== wordBank.length)){
                levelUp();
                displayMessage('Next Level!');
            }
            if((winCondition === noOfCharacters) && (level === wordBank.length)){
                displayMessage('You have won the game!');

            }
        }
    }

    if (enterCharacter){
        return;
    }

    //Wrong Character
    hangman = hangman + defaultHangman.shift();
    usedAlphabets.push(inputAlphabet);
    displayMessage('You have guessed a wrong character!');
    displayLives();
    if(hangman.length === loseCondition){
        displayMessage('You have lost the game');
    }
}