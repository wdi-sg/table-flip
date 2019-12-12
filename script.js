let secretWord = ['c', 'a', 't']

let tableFlip = ["(", "╯", "ರ", " ", "~", " ", "ರ", ")", " ", "╯", "︵", " ", "┻", "━", "┻"]
const gameLength = tableFlip.length

let currentTableFlip = []

let correctLetter = ""

let wrongGuesses = 0

var inputHappened = function (currentInput) {

  for (let i = 0; i < secretWord.length; i++) {
    if (currentInput === secretWord[i]) {
        correctLetter = correctLetter + currentInput
        return `You guessed it RIGHT! - Your correct guesses: ${correctLetter}`
    }
  }
      let shiftedCharacter = tableFlip.shift() 
      currentTableFlip.push(shiftedCharacter)
      wrongGuesses++
      if (wrongGuesses > gameLength) {
        return `Game over!`
      } else {
        return `${currentTableFlip.join("")}`
      }
      
}