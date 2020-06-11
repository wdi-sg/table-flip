let words = {
  'Easy': 'cat',
  'Medium': 'donkey',
  'Hard': 'waxwing',
  'WTFBBQ': 'sesquipedalian loquaciousness'
  };
let punishment = [];
let tableFlipTemp = '(╯ರ ~ ರ）╯︵ ┻━┻';
let tableFlip = tableFlipTemp.match(/\s?./g);
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
});
submitButton.addEventListener('click', function() {
  checkLetter(enteredLetter.value);
  checkWord();
  checkLose();
  enteredLetter.value = '';
});
resetButton.addEventListener('click', function() {
  enumerateBlanks(difficulty.value);
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
  //return blanks.join(' ');
  return [chosenWord, blanks.join(' ')];
}


function checkLetter(x) {
  if (x.toLowerCase().match(/[a-z]/i) && x.length == 1) { //checks if submitted letter is proper
    if (chosenWord.indexOf(x) !== -1) {
     //matching letter x, x indexed at 1,2,3, replace all 1,2,3 in arr with x
      let indices = [];
      for (let i=0; i<chosenWord.length; i++) {
        if (chosenWord[i] === x) indices.push(i);
      }
      for (let i=0; i<indices.length; i++) {
        blanks[indices[i]] = x;
      }
      guesses.innerText = blanks.join(' ');
    }
    else {
      punishment.push(tableFlip.shift());
      punishmentArea.innerText = punishment.join('');
    }
  }
  else {
    alert('That is not a letter of the alphabet.');
  }
}


function checkWord() {
  if (guesses.innerText.split('').filter(x => x.match(/\w/)).join('') === chosenWord) {
    setTimeout(alert('You did it!'), 1000); //this does not work??
  }
}

function checkLose() {
  if (punishmentArea.innerText === tableFlipTemp) {
    setTimeout(alert('You lost. Better luck next millennium.'), 1000)
  }
}
