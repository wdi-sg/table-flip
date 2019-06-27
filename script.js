//Declaring global variables
var wordBank = ['cat', 'doggy', 'alphabet'];
var level = 1
var secretWord = stringSplit(wordBank[level-1]);
var noOfCharacters = secretWord.length;
var winCondition = 0;
var guessedWord = createEmpty(noOfCharacters);
var usedAlphabets = [];
var adminAddWords = '';

var defaultHangman = ['┳━┳','(ರ ~ ರ）┳━┳','(╯ರ ~ ರ）╯︵ ┻━┻'];
var warning = 0;
var currentHangman = stringSplit(defaultHangman[warning]);
var warningLevel = currentHangman.length;
var loseCondition = defaultHangman[defaultHangman.length-1].length;
var hangman = '';



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

var displayLevel = function (){
    document.getElementById('level').innerText=`Game Level: ${level}`;
}

var displayWarning = function (){
    switch(warning) {
        case 1:
        document.getElementById('warning').innerText=`Warning Level: Medium`;
        break;

        case 2:
        document.getElementById('warning').innerText=`Warning Level: Danger`;
        break;
    }

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

function checkNewWord(string) {
    var reg = "/.,,';][=-0987654321`~!@#$%^&*()_+|}{:?><" + '""';
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

// Level Up function
var levelUp = function (){
    level++;
    secretWord = wordBank[level-1];
    noOfCharacters = secretWord.length;
    winCondition = 0;
    guessedWord = createEmpty(noOfCharacters);
    displayLevel();
    displayWordGuessed()
}

var warningUp = function(){
    warning++;
    currentHangman = stringSplit(defaultHangman[warning]);
    hangman = '';
    warningLevel = currentHangman.length;
    displayLives();
    displayWarning();
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

    //Check input character/admin
    //Check for 1 alphabet
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
    hangman = hangman + currentHangman.shift();
    usedAlphabets.push(inputAlphabet);
    displayMessage('You have guessed a wrong character!');
    displayLives();
    if((hangman.length === warningLevel) && (warning !== 2)){
        warningUp();
    }
    if(hangman.length === loseCondition){
        displayMessage('You have lost the game');
    }
}