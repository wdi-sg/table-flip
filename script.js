console.log("hello script js");

window.onload = function () {
    document.querySelector('#output').innerText = 'Guess the word!\nStart game? (y / n)';
};
// store secret words in an array of strings
// select a secret word from the array and split the string into a array
// store the different stages of the table flip

//all global variables here

let secretWord = '';
let words = ['cat', 'doggy', 'alphabet'];
let tableFlip = [
'┳━┳',
'(ರ ~ ರ）┳━┳',
'(╯ರ ~ ರ）╯︵ ┻━┻\nGAME OVER! Start again? (y / n)',
];
let currentFlip = '';
let lettersFound = 0;
let currentMode = 'idle'
let foundWord = [];
let wrongLetters = [];

// input flow --

// if input is admin
// show admin mode start
// while input not endmin
// all entries will append to secret words array
// if input endadmin
// admin mode end

let toggleAdmin = function(input){
    var key = input.toLowerCase();
    if (key === 'endadmin'){
        currentMode = 'idle';
    } else if (currentMode === 'admin'){
        if (!words.includes(input)){
            words.push(input);
        }
        console.log(words);
        return true
    } else if (key === 'admin') {
        currentMode = 'admin';
        return true
    }
    return false
}

// check if game has started
// not admin and secretWord is ''
// prompt to start game
// else do nothing

let startGame = function(){
    //reset all values
    currentMode = 'game';
    currentFlip = '';
    wrongLetters = []
    lettersFound = 0

    var index = Math.floor(Math.random() * words.length);
    secretWord = words[index].split("");
    foundWord = secretWord.map(function(item){
        return item = '_'
    });
    console.log('game started with',secretWord,'\nand word is',foundWord);
}

// loop through secret word
// keep track of how letters found --global
// keep track amt found -- global

// if count > 0 means found
// add to correctly guessed letter array using index and
// display 'you guessed right' and the letters they found in its correct place
// check for winning state. if the letters found in word equals secret word

let isWon = function(){
    if (lettersFound == secretWord.length){
        currentMode = 'idle'
        return true
    } else {
        return false
    }
}

// else means not found
// add to wrongly guessed letters - global
// use the length of the wrongly guessed letters to cycle
// after a number of mistake cycle thru the stages of the table flip and add to the current flip

let isLetter = function(input){
    var found = false;
    for (var i = 0; i < secretWord.length; i++){
        if (input === secretWord[i]){
            foundWord[i] = input;
            lettersFound++;
            found = true;
        }
    }
    if (!found){
        wrongLetters.push(input);
        switch (wrongLetters.length){
            case 2:
                currentFlip = tableFlip[0];
                break;
            case 4:
                currentFlip = tableFlip[1];
                break;
            case 6:
                currentFlip = tableFlip[2];
                currentMode = 'idle';
                console.log(currentMode)
                break;
        }
    }
}

// check if the game has ended from too many wrong guesses
// if the length of the current flip array is full
    // if true display game over


// display output

let updateOutput = function(input){
    var output;
    switch (input) {
        case 'admin':
            output = 'ADMIN MODE'
            break;
        case 'idle':
            output = 'Start game?\n(y / n)'
            break;
        case 'game':
            output = foundWord.join(' ') + '\n' + currentFlip;
            break;
        case 'win':
            output = foundWord.join(' ') + '\n' + currentFlip + '\nYou won!\nPlay again? (y / n)';
            break;
        case 'default':
            output = 'Guess the word!\nStart game? (y / n)';
    }
    return output;
}

var inputHappened = function(currentInput){
    var mode = 'default';
    var output;
    if (toggleAdmin(currentInput)){
        document.querySelector('#input').value = '';
        mode = 'admin'
    }

    switch (currentMode) {
        case 'idle':
            if (currentInput.toLowerCase() == 'y' || currentInput.toLowerCase() == 'yes') {
                startGame(currentInput)
                mode = 'game'
            }
            break;
        case 'game':
            isLetter(currentInput);
            mode = 'game'
            if (isWon()) {
                mode = 'win'
            }
            break;
        case 'win':
            mode = 'win'
            break;
    }
    output = updateOutput(mode)
    document.querySelector('#input').value = '';
    return output;
};