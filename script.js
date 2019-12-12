let word = [
  ['c', 'a', 't'],
  ['d', 'o', 'g', 'g', 'y'],
  ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't'],
  ["hello"],
  ["bathing"]
];
// initializing the array by splitting every full word
for (let i = 0; i < word.length; i++) {
  if (word[i].length === 1) {
    word[i] = word[i][0].split("")
  }
}

// random secret word out of array
let secretWord = word[Math.floor(Math.random() * ((word.length - 1) - 0 + 1)) + 0]

// define the table flips
let tableFlipFirst = ["┻", "━", "┻"]
let tableFlipSecond = ["(", "╯", "ರ", " ", "~", " ", "ರ", ")", " "]
let tableFlipThird = ["╯", "︵"]
let fullTableFlip = ["(", "╯", "ರ", " ", "~", " ", "ರ", ")", " ", "╯", "︵", "┻", "━", "┻"]
// define for later reference before unshift and pop
const tableFlipFirstLength = tableFlipFirst.length
const tableFlipSecondLength = tableFlipSecond.length
const tableFlipThirdLength = tableFlipSecond.length
// game ending with full table flip
const gameLength = fullTableFlip.length
// current flip
let currentTableFlip = []

let correctLetter = ""
let correctGuesses = []

// assign whole word with underscores
for (let i = 0; i < secretWord.length; i++) {
  correctGuesses[i] = `_ `
}

let wrongGuesses = 0

let adminMode = false

var inputHappened = function (currentInput) {
  // split words with every input
  for (let i = 0; i < word.length; i++) {
    if (word[i].length === 1) {
      word[i] = word[i][0].split("")
    }
  }
  //activate admin mode, deactivate and assign new secretWord
  if (currentInput === "admin") {
    adminMode = true
    return `Admin on!`
  } else if (currentInput === "endadmin") {
    adminMode = false
    // random secret word to reset game
    secretWord = word[Math.floor(Math.random() * ((word.length - 1) - 0 + 1)) + 0]
    return `Admin off!`
  }
  // entering new word
  if (adminMode === true && currentInput !== "endadmin") {
    word.push([currentInput])
    return `${currentInput} added to the game!`
  }

  for (let i = 0; i < secretWord.length; i++) {
    // correct guess logic
    if (currentInput === secretWord[i]) {
      // find letter or duplicate letters and assign them if theres a match
        // first letter from front of array
      let letterIndexFront = secretWord.indexOf(currentInput)
        // insert at correct index
      correctGuesses[letterIndexFront] = `${currentInput}`
        // second letter from back of array
      let letterIndexBack = secretWord.lastIndexOf(currentInput)
        // if the index of both the same, no duplicate entry
      if (letterIndexBack !== letterIndexFront) {
        correctGuesses[letterIndexBack] = `${currentInput}`
      }
      correctLetter = correctLetter + currentInput
      // if all letters = secretword, win. if not, right guess
      if (correctGuesses.join("") === secretWord.join("")) {
        document.querySelector('#input').disabled = true
        document.querySelector('#input').value = "Refresh for retry"
        return `You win!`
      }
      document.querySelector('#input').value = ""
      return `You guessed it RIGHT! - Your correct guesses: ${correctGuesses.join("")}`
    }
  }
  // wrong guesses less than first flip picture, push to flip display
  if (wrongGuesses < tableFlipFirstLength) {
    let shiftedCharacter = tableFlipFirst.pop()
    currentTableFlip.push(shiftedCharacter)
    wrongGuesses++
  } 
  // wrong guesses less than second flip picture, unshift to flip display
  else if (wrongGuesses < tableFlipSecondLength + tableFlipFirstLength) {

    let shiftedCharacter = tableFlipSecond.pop()
    currentTableFlip.unshift(shiftedCharacter)
    wrongGuesses++
  } 
  // wrong guesses less than full flip picture, insert to flip display
  else if (wrongGuesses < tableFlipSecondLength + tableFlipFirstLength + tableFlipThirdLength) {
    // small cheat, utilizing last empty space in flip picture as insert point
    let lastIndex = fullTableFlip.lastIndexOf(" ")
    let shiftedCharacter = tableFlipThird.pop()
    currentTableFlip.splice(lastIndex, 0, shiftedCharacter)
    wrongGuesses++
  }
  // if not game over, display the current flip picture
  if (wrongGuesses > gameLength) {
    document.querySelector('#input').disabled = true
    document.querySelector('#input').value = "Refresh for retry"
    return `Game over!`
  } else {
    document.querySelector('#input').value = ""
    return `${currentTableFlip.join("")}`
  }
}