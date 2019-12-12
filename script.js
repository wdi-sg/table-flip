
var secretWord = [
['c','a','t'],
['d','o','g','g','y'],
['a','l','p','h','a','b','e','t']
];
var wrongWord = ['(','╯','ರ',' ','~',' ','ರ','）','╯','︵','┻','━','┻'];
var storedWord = "";
var flipTable = "";
var counter = 0;
var wrongCount= 0;
var stage = 0;

var guessWord1 = function(input){
    for (var i = 0; i < secretWord[0].length; i++){ // if they keyed in correctly
        if (input === secretWord[0][i] && counter < secretWord[0].length && stage === 0){
            counter++;
            storedWord += secretWord[0][i];
            console.log(counter);
            console.log(storedWord);
            return ("Correct! Words found left: " + (secretWord[0].length - counter));
        }
    } // Below code if it the keyed in wrongly
    if (input !== secretWord[0][i] & stage === 0){
        wrongCount++;
        console.log("Wrong count is: " + wrongCount);
    }
};

var guessWord2 = function(input){
    for (var i = 0; i < secretWord[1].length; i++){ // if they keyed in correctly
        if (input === secretWord[1][i] && counter < secretWord[1].length && stage === 1){
            counter++;
            storedWord += secretWord[1][i];
            console.log(counter);
            console.log(storedWord);
            return ("Correct! Words found left: " + (secretWord[1].length - counter));
        }
    } // Below code if it the keyed in wrongly
    if (input !== secretWord[1][i] & stage === 1){
        wrongCount++;
        console.log("Wrong count is: " + wrongCount);
    }
};

var guessWord3 = function(input){
    for (var i = 0; i < secretWord[2].length; i++){ // if they keyed in correctly
        if (input === secretWord[2][i] && counter < secretWord[2].length && stage === 2){
            counter++;
            storedWord += secretWord[2][i];
            console.log(counter);
            console.log(storedWord);
            return ("Correct! Words found left: " + (secretWord[2].length - counter));
        }
    } // Below code if it the keyed in wrongly
    if (input !== secretWord[2][i] & stage === 2){
        wrongCount++;
        console.log("Wrong count is: " + wrongCount);
    }
};


var inputHappened = function(currentInput){
  var correct = guessWord1(currentInput);
  var correct2 = guessWord2(currentInput);
  var correct3 = guessWord3(currentInput);


  if (stage === 0){
  if (correct) {
    // console.log("correct if statment");
      return correct;
  } else if (counter === secretWord[0].length){
    counter = 0;
    stage++;
    console.log(stage);
    return "Yay completed! On to the next stage" + " Words searched are: " + storedWord;
  } else if (wrongCount > 0 && wrongCount < 14){
    console.log(wrongCount);
    flipTable = flipTable + wrongWord.shift();
    return flipTable;
  } else {
    return "Game over!! " + flipTable;
  }
};

  if (stage === 1){
  if (correct2) {
    // console.log("correct if statment");
      return correct2;
  } else if (counter === secretWord[1].length){
    counter = 0;
    stage++;
    return "Yay completed! On to the next stage!" + " Words searched are: " + storedWord;
  } else if (wrongCount > 0 && wrongCount < 14){
    flipTable = flipTable + wrongWord.shift();
    return flipTable;
  } else {
    return "Game over!! " + flipTable;
        }
      };

if (stage === 2){
  if (correct3) {
    // console.log("correct if statment");
      return correct3;
  } else if (counter === secretWord[2].length){
    counter = 0;
    console.log(stage);
    return "Yay completed! Final stage!" + " Words searched are: " + storedWord;
  } else if (wrongCount > 0 && wrongCount < 14){
    console.log(wrongCount);
    flipTable = flipTable + wrongWord.shift();
    return flipTable;
  } else {
    return "Game over!! " + flipTable;
  }
};

}