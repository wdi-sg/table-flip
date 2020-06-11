console.log("hello script js");

var secretWords = ['c','a','t'];
var correctWords = [];
var wrongGuesses = [];
var table = "(╯ರ ~ ರ）╯︵ ┻━┻";
var flipTable = table.split("");
var tableFigure = [];


var reset = function() {
   return document.querySelector('#input').value = "";
}



var inputHappened = function(input) {
console.log(input);

    if(checkIfArrayHasInput(input, secretWords)) {
        console.log('got a match');
        if(!checkIfArrayHasInput(input, correctWords)) {
            correctWords.push(input);
            reset();
            if ( checkIfGameWon() ) {
                return "Winner winner chicken dinner";
            } else {
                return "correct guess -- " + correctWords;
            }
        }
    } else {
        console.log('not a match');
        if (!checkIfArrayHasInput(input, wrongGuesses)) {
            console.log('not a duplicate wrong guess')
            wrongGuesses.push(input);
            reset();
            }
            if (checkIfGameLost()) {
                return "Sorry. Game over! --- " + tableFigure.join('');
            } else {
                return "Wrong alphabet. Try again! --- " + tableFigure.join('');
            }
            return wrongGuesses;
        }
    }


// checks input str against array (eg [c, a, t] return true if inside
var checkIfArrayHasInput = function(input, array) {
    var arrayHasInput = false;
    for(var i = 0; i < array.length; i++) {
        if(array[i] === input) {
            arrayHasInput = true;
        }
    }
    return arrayHasInput;
}


var checkIfGameWon = function() {
    var gameWon = (secretWords.length === correctWords.length);
    // console.log("game won: " + gameWon)
    if(gameWon) {
        return true;
        // return "You've won the game!";
    } else {
        return false;
        // return "You've guessed correctly! ------ " + correctWords;
    }
}

var checkIfGameLost = function() {
    var gameLost = flipTable.length === 0;
    console.log('is game lost:' + gameLost);
    if (gameLost) {
        return true;
    } else {
        var tableFlip = flipTable.pop();
        tableFigure.unshift(tableFlip);
        return false;
    }
}