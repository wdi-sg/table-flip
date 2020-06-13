let words = {
  'Easy': 'cat',
  'Medium': 'donkey',
  'Hard': 'waxwing',
  'WTFBBQ': 'sesquipedalian loquaciousness'
  };
let punishment = [];
let tableFlipTemp = '(╯ರ ~ ರ）╯︵ ┻━┻';
let tableFlip = tableFlipTemp.match(/\s?./g);
let tableFlipStore = [...tableFlip];
let chosenWord = null;
//let tableFlip = ['┳━┳', '(ರ ~ ರ）┳━┳', '(╯ರ ~ ರ）╯︵ ┻━┻'];


let difficulty = document.getElementById('selectedDifficulty');
let punishmentArea = document.getElementById('punishment');
let guesses = document.getElementById('guesses');
let enteredLetter = document.getElementById('enterLetter');
let submitButton = document.getElementById('submit');
let resetButton = document.getElementById('reset');


//------------------------------------  EVENT-LISTENERS ----------------------------------------

difficulty.addEventListener('change', function() {
  enumerateBlanks(difficulty.value);
  enteredLetter.value = '';
  punishmentArea.innerText = '';
  punishment = [];
  
});
submitButton.addEventListener('click', function() {
  checkLetter(enteredLetter.value);
  checkWord();
  checkLose();
  enteredLetter.value = '';
});
enteredLetter.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    checkLetter(enteredLetter.value);
    checkWord();
    checkLose();
    enteredLetter.value = '';
  }
})
resetButton.addEventListener('click', function() {
  enumerateBlanks(difficulty.value);
  punishmentArea.innerText = '';
  punishment = [];
  tableFlipStore = [...tableFlip];
})


//------------------------------------ FUNCTIONS ----------------------------------------

let blanks = [];
function enumerateBlanks(diff) {
  blanks = [];
  for (let i=0; i<words[diff].length; i++) {
    if (words[diff][i].match(/\s/)) blanks.push(' ');
    else blanks.push('_');
  }
  guesses.innerText = blanks.join(' ');
  chosenWord = words[diff];
  tableFlipStore = [...tableFlip];
  //return blanks.join(' ');
  return [chosenWord, blanks.join(' ')];
}


function checkLetter(x) {
  if (x.toLowerCase().match(/[a-z]/) && x.length == 1) {
    if (chosenWord.indexOf(x.toLowerCase()) !== -1) {
      let indices = [];
      for (let i=0; i<chosenWord.length; i++) {
        if (chosenWord[i] === x.toLowerCase()) indices.push(i);
      }
      for (let i=0; i<indices.length; i++) {
        blanks[indices[i]] = x.toLowerCase();
      }
      guesses.innerText = blanks.join(' ');
    }
    else {
      punishment.push(tableFlipStore.shift());
      punishmentArea.innerText = punishment.join('');
    }
  }
  else {
    alert('That is not a letter of the alphabet.');
  }
}


function checkWord() {
  if (guesses.innerText.split('').filter(x => x.match(/\w/)).join('') === chosenWord) {
    function alertTemp() {alert('You did it!');}
    setTimeout(alertTemp, 500);
  }
}

function checkLose() {
  if (punishmentArea.innerText === tableFlipTemp) {
    function alertTemp() {alert('You lost. Better luck next millennium.');}
    setTimeout(alertTemp, 500)
  }
}
