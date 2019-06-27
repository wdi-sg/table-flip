////////////////////////////////////////////////////////////
////1. Declaring Global Variables & functions
////////////////////////////////////////////////////////////

//Declaring Word related global variables
var gameLevel = 1
var wordBank = ['cat', 'doggy', 'alphabet'];
var secretWord = stringSplit(wordBank[gameLevel-1]);
var noOfCharacters = secretWord.length;
var guessedWord = createEmpty(noOfCharacters);
var usedAlphabets = [];
var adminAddWords = '';
var winCondition = 0;

//Declaring Hangman related global variables
var warningLevel = 0;
var defaultHangman = ['┳━┳','(ರ ~ ರ）┳━┳','(╯ರ ~ ರ）╯︵ ┻━┻'];
var currentHangman = stringSplit(defaultHangman[warningLevel]);
var warningCount = currentHangman.length;
var loseCondition = defaultHangman[defaultHangman.length-1].length;
var hangmanStatus = '';

//Declaring global display functions
var displayLives = function (){
    document.getElementById('lives').innerText=`${hangmanStatus}`;
};

var displayWordGuessed = function (){
    var output=guessedWord.join(' ');
    document.getElementById('word-guessed').innerText=`${output}`;
};
displayWordGuessed()

var displayMessage = function (data){
    document.getElementById('game-message').innerText=`${data}`;
};

var displayLevel = function (){
    document.getElementById('level').innerText=`Level: ${gameLevel}`;
};

var displayWarning = function (){
    var element = document.getElementById('warning');
    switch(warningLevel) {
        case 1:
        element.innerText=`Warning Level: Medium`;
        element.style.color = '#d6d610';
        break;

        case 2:
        element.innerText=`Warning Level: Danger`;
        element.style.color = 'red';
        break;
    }
};

//Display Switch
var startGame = function () {
    var button = document.getElementsByClassName('start');
    var main = document.getElementsByClassName('main');
    var ipt = document.getElementsByClassName('input');

    document.getElementById('level').style.visibility = 'visible';

    for (var i=0; i < button.length; i++){
        button[i].style.visibility = "hidden" ;
    }
    for (var j=0; j < main.length; j++){
        main[j].style.visibility = "visible";
    }
    for (var k=0; k < ipt.length; k++){
        ipt[k].style.visibility = "visible";
    }
}

//Global function for Input Field
var clearField= function() {
    document.getElementById('alphabet').value = "";
}
//enter key trigger
var enter = document.getElementById("alphabet");
enter.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
  }
});

//Declaring Global functions to tackle strings
function stringSplit(inputString) {
    inputString = inputString.split('');
    return inputString;
}

//Creates word blanks
function createEmpty(number) {
    var str=[]
    for (var i=0; i<number;i++){
        str.push ('_');
    }
    return str;
}

//Check for numbers and special characters for admin's new words
function checkNewWord(string) {
    var reg = "/.,,';] [=-0987654321`~!@#$%^&*()_+|}{:?><" + '""';
    reg = stringSplit(reg);
    string = stringSplit(string);
    for (var i=0; i<reg.length; i++){
        for (var j=0; j<string.length;j++){
            if(reg[i] === string [j]){
                return false;
            }
        }
    }
    return true;
}

//Declaring Global functions to Level up Game or warning.

// Level Up function
var levelUp = function (){
    gameLevel++;
    secretWord = stringSplit(wordBank[gameLevel-1]);
    noOfCharacters = secretWord.length;
    winCondition = 0;
    guessedWord = createEmpty(noOfCharacters);
    usedAlphabets = [];
    displayLevel();
    displayWordGuessed();
};

// Warning Level-up
var warningUp = function(){
    warningLevel++;
    currentHangman = stringSplit(defaultHangman[warningLevel]);
    hangmanStatus = '';
    warningCount = currentHangman.length;
    displayLives();
    displayWarning();
};

////////////////////////////////////////////////////////////
////2. Main Code
////////////////////////////////////////////////////////////

var checkAlphabet = function(){
    //Get alphabet value
    var inputAlphabet=document.getElementById('alphabet').value;
    clearField();

    //Check if game has been won or lost already (Prevent game from continuing after)
    if(winCondition === noOfCharacters){
        displayMessage('You have won the game!');
        return;
    } else if(hangmanStatus.length === loseCondition){
        displayMessage('You have lost the game');
        return;
    }

    //Check if admin has been keyed in and prompt for new word + word check
    if (inputAlphabet.toLowerCase()==='admin'){
        while (adminAddWords.toLowerCase() !== 'endadmin') {
            adminAddWords = prompt('Enter new words for the word bank: ');
            if (checkNewWord(adminAddWords) && adminAddWords.toLowerCase() !== 'endadmin'){
                wordBank.push(adminAddWords);
            } else if (adminAddWords.toLowerCase() !== 'endadmin') {
                alert('Word contains number or special character!');
            }
        }
        return;
    }

    //Check if input is not 1 Alphabet
    if (inputAlphabet.length !== 1 || !checkNewWord(inputAlphabet)){
        displayMessage('Incorrect input. Please only input 1 Alphabet');
        return;
    }

    //Check against used Alphabets
    for (var i=0; i<usedAlphabets.length;i++) {
        if (inputAlphabet === usedAlphabets[i]){
            displayMessage('You have used this alphabet!');
            return;
        }
    }

    ///////////////////////////////////////
    //Check secret word
    //////////////////////////////////////

    //This parameter is to control if the alphabet is correct.
    var enterCharacter = false;

    //This loop is to check if alphabet can be found in secret word.
    for (var i=0; i<secretWord.length;i++){
        if(inputAlphabet === secretWord[i]){
            usedAlphabets.push(inputAlphabet);
            guessedWord.splice(i,1,inputAlphabet);//Add Alphabet into on-screen output
            secretWord.splice(i,1," ");//Remove Alphabet from secret word.
            winCondition++;
            enterCharacter = true;
            displayWordGuessed();
            displayMessage('You have guessed a character!');

            //This is to check if we have finished guessing current word
            if ((winCondition === noOfCharacters) && (gameLevel !== wordBank.length)){
                levelUp();
                displayMessage('Next Level!');
            }

            //This is to check if overall the game has been won.
            if((winCondition === noOfCharacters) && (gameLevel === wordBank.length)){
                displayMessage('You have won the game!');
            }
        }
    }

    //This controls that if a character has been entered, we don't run the code below.
    if (enterCharacter){
        return;
    }

    //This is to increase to the next level of hangman .
    if((hangmanStatus.length === warningCount) && (warningLevel !== 2)){
        warningUp();
    }

    //The following codes run updates the hangman when they user key in the wrong alphabet.
    hangmanStatus = hangmanStatus + currentHangman.shift();
    usedAlphabets.push(inputAlphabet);
    displayMessage('You have guessed a wrong character!');
    displayLives();

    //This is to define that you have officially lost the game
    if(hangmanStatus.length === loseCondition){
        displayMessage('You have lost the game');
    }
};