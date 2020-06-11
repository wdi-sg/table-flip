const submitButton = document.getElementById("submit");
submitButton.onclick = buttonClicked;
var secretWords = ["cat", "pisa", "felix"];
var secretWord = getSecretWord();
var underscoreArray = getUnderScoreArray();
var secretArray = getSecretArray();
var inAdminMode = 0; //1 means yes, 0 means no

var inputCount = 0;
var emojiArray = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
              0x1F354, 0x1F35F];
// var emojiArray = ["(","╯","ರ", "~", "ರ","）","╯","︵","┻","━","┻"];
var wrongWords = 0;
overwriteAnswer(underscoreArray.join(" "));

function buttonClicked() {
  console.log(secretWords);
  var input = document.getElementById("input").value;

  switch(inAdminMode) {
    case 1: // in admin mode
      console.log("We are in admin mode..");
      if (input == "endadmin") {
        changeAdminMode();
        buttonClicked();
      }
      else {
        addWord(input);
      }
      break;
    case 0: // playing mode
      console.log("We are in playing mode..");
      if (input == "admin") { // admin mode
        changeAdminMode();
        buttonClicked();
      }
      else { // not in admin mode
        for (let i = 0; i < secretArray.length; i++) {
          if (input == secretArray[i]) {
            underscoreArray[i] = input;
            inputCount++;
            overwriteAnswer(underscoreArray.join(" "));
            checkIfHaveWon();
            return;
          }
        }
        updateWrongWords();
      }
      break;
  }

}

function addWord(word) {
  secretWords.push(word);
  overwriteOutput("New word: " + word + " added!");
}

function changeAdminMode() {
  if (inAdminMode == 1) {
    inAdminMode = 0;
    overwriteOutput("You are leaving admin mode..");
  }
  else if (inAdminMode == 0) {
    inAdminMode = 1;
    overwriteOutput("You are entering admin mode..");
  }
}

function getSecretWord() {
  let random = Math.floor(Math.random() * secretWords.length);
  return secretWords[random];
}

function getUnderScoreArray() {
  var underScoreArray = [];
  for (let i = 0; i < secretWord.length; i++) {
    underScoreArray.push("_");
  }
  return underScoreArray;
}


function checkIfHaveWon() {
  for (let i = 0; i < underscoreArray.length; i++) {
    if (underscoreArray[i] != secretArray[i]) {
      overwriteOutput("Correct!");
      return;
    }
  }
  overwriteOutput("You have won!");
  overwriteAnswer(secretWord);
  secretWord = getSecretWord();
  resetGame();
}

function resetGame() {
  const resetButton = document.createElement('button');
    resetButton.innerHTML = "Reset";
    resetButton.style.textAlign = "center";
    document.body.appendChild(resetButton);
    resetButton.onclick = function(e) {
    window.location.reload()
  }
}

function updateWrongWords() {
  if (wrongWords < emojiArray.length) {
    let displayMessage = "";
    wrongWords++;
    for (let i = 0; i < wrongWords; i++) {
        displayMessage += String.fromCodePoint(emojiArray[i]);
    }
    displayMessage = displayMessage + "(" + (emojiArray.length - wrongWords) + ")";
    overwriteEmoji(displayMessage);
    // appendToEmoji(String.fromCodePoint(emojiArray[wrongWords]) + " (" + (emojiArray.length - wrongWords) + ")");
    overwriteOutput("Wrong answer!");
  }
  else {
    overwriteOutput("You lost!");
    overwriteAnswer(secretWord);
    resetGame();
  }
}

function getSecretArray() {
  return secretWord.split("");
}

function overwriteAnswer(text){
    var output = document.querySelector('#answer');
    output.innerText = text;
}

function appendAnswer(text) {
    var output = document.querySelector('#answer');
    output.innerText += text;
}

function overwriteEmoji(text){
    var output = document.querySelector('#emoji');
    output.innerText = text;
}

function appendToEmoji(text) {
    var output = document.querySelector('#emoji');
    output.innerText += text;
}

function overwriteOutput(text){
    var output = document.querySelector('#output');
    output.innerText = text;
}

function appendOutput(text) {
    var output = document.querySelector('#output');
    output.innerText += text;
}
