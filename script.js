let word = [
  ['c', 'a', 't'],
  ['d', 'o', 'g', 'g', 'y'],
  ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't'],
  ["hello"],
  ["bathing"]
];
// make words to character arrays
for (let i = 0; i < word.length; i++) {
  if (word[i].length === 1) {
    word[i] = word[i][0].split("")
  }
}
// random secret word out of array
let secretWord = word[Math.floor(Math.random() * ((word.length - 1) - 0 + 1)) + 0]

let tableFlipFirst = ["┻", "━", "┻"]
let tableFlipSecond = ["(", "╯", "ರ", " ", "~", " ", "ರ", ")", " "]
let tableFlipThird = [ "╯", "︵"]
let fullTableFlip = ["(", "╯", "ರ", " ", "~", " ", "ರ", ")", " ", "╯", "︵", "┻", "━", "┻"]

const tableFlipFirstLength = tableFlipFirst.length
const tableFlipSecondLength = tableFlipSecond.length
const tableFlipThirdLength = tableFlipSecond.length

const gameLength = fullTableFlip.length

let currentTableFlip = []

let correctLetter = ""
let correctGuesses = []

for (let i = 0; i < secretWord.length; i++) {
  correctGuesses[i] = `_`
}

let wrongGuesses = 0

var inputHappened = function (currentInput) {

  for (let i = 0; i < secretWord.length; i++) {
    if (currentInput === secretWord[i]) {

      let letterIndexFront = secretWord.indexOf(currentInput)
      correctGuesses[letterIndexFront] = `${currentInput}`
      let letterIndexBack = secretWord.lastIndexOf(currentInput)
      if (letterIndexBack !== letterIndexFront) {
        correctGuesses[letterIndexBack] = `${currentInput}`
      }

      correctLetter = correctLetter + currentInput
      if (correctGuesses.join("") === secretWord.join("")) {
        return `You win!`
      }
      return `You guessed it RIGHT! - Your correct guesses: ${correctGuesses.join("")}`
    }
  }
  //continue here, insert second flip other way around! Maybe use FullTableFlip.indexOf?
  if (wrongGuesses < tableFlipFirstLength) {
    let shiftedCharacter = tableFlipFirst.shift()
    currentTableFlip.push(shiftedCharacter)
    wrongGuesses++
  } else if (wrongGuesses < tableFlipSecondLength + tableFlipFirstLength) {
    
    let shiftedCharacter = tableFlipSecond.pop()
    currentTableFlip.unshift(shiftedCharacter)
    wrongGuesses++
  } else if (wrongGuesses < tableFlipSecondLength + tableFlipFirstLength + tableFlipThirdLength) {
    let lastIndex = fullTableFlip.lastIndexOf(" ")
    let shiftedCharacter = tableFlipThird.pop()
    currentTableFlip.splice(lastIndex, 0, shiftedCharacter)
    wrongGuesses++
  }
  // let shiftedCharacter = tableFlip.shift()
  // currentTableFlip.push(shiftedCharacter)
  // wrongGuesses++
  if (wrongGuesses > gameLength) {
    return `Game over!`
  } else {
    return `${currentTableFlip.join("")}`
  }

}