const submitButton = document.getElementById("submit");
submitButton.onclick = buttonClicked;
var secretWords = ["cat", "pisa", "felix"];
var secretWord = getSecretWord();
var underscoreArray = getUnderScoreArray();
var secretArray = getSecretArray();
var inAdminMode = 0; //1 means yes, 0 means no
var wrongWords = 0;
// var inputCount = 0;
var emojiArray = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,0x1F354, 0x1F35F];
overwriteInput("");
overwriteAnswer(underscoreArray.join(" "));

function buttonClicked() {
  console.log(secretWords);
  console.log("Cookie exists: " + cookieExists());
  var input = document.getElementById("input").value;

  if (cookieExists()) { // cookie exists
    console.log("Cookie exists");
    if (input == "endadmin") {
        changeAdminMode(); // deleting the cookie, updating messages
    }
    else if (input == "admin") {
        console.log("Can't add the word admin");
        return;
    }
    else {
        addWord(input);
    }
  }
  else { // cookie does not exists
    console.log("Cookie does not exists");
    if (input == "admin") { // admin mode
        changeAdminMode();
        // window.location.reload();
        buttonClicked();
      }
    else { // not in admin mode
        console.log("This is regular input..");
        for (let i = 0; i < secretArray.length; i++) {
          if (input == secretArray[i]) {
            underscoreArray[i] = input;
            // inputCount++;
            overwriteAnswer(underscoreArray.join(" "));
            checkIfHaveWon();
            return;
           }
        }
        updateWrongWords();
      }
    }
}

// ---- ADMIN MODE ----//

function changeAdminMode() {
 console.log("Entering changing admin..");
  if (cookieExists()) {
    console.log("Checking.. cookie exists");
    deleteCookie();
    overwriteHeader("Let's play!");
    console.log("Cookie deleted");
    overwriteOutput("You are leaving admin mode..");

    console.log(document.getElementById("answerh2"));
    document.getElementById("answerh2").innerHTML = "Answer:";
    overwriteAnswer(underscoreArray.join(" "));
  }
  else {
    console.log("Checking.. cookie does not exists");
    setCookie("username","admin",30);
    console.log("The cookie set is: " + getCookie("username"));
    console.log("Checking.. Cookie created");
    overwriteOutput("You are entering admin mode..");
    overwriteHeader("Add a new word!");

    overwriteAnswer("");
    overwriteInput("");
    console.log(document.getElementById("answerh2"));
    document.getElementById("answerh2").innerHTML = "";
  }
}

function addWord(word) {
  secretWords.push(word);
  overwriteOutput("New word: " + word + " added!");
}

// ---- VALIDATION MODE ----//

function checkValidation(text) {
    // No blank space, no symbols, only single letters
}

// ---- PLAYING MODE ----//
function getSecretArray() {
  return secretWord.split("");
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
    window.location.reload();
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

// ---- COOKIE FUNCTIONS----//

function cookieExists() {
  return getCookie("username") != "";
}

function deleteCookie() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log("Inside set cookie function - cookie exists?: " + getCookie("username"));
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// ---- APPENDING/OVERWRITE FUNCTIONS ----//

function overwriteHeader(text) {
    const h1 = document.getElementById("header");
    h1.innerText = text;
}

function overwriteInput(text) {
    const input = document.getElementById("input");
    input.value = "";
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