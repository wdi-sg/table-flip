
var state = "player" //player, admin, gameOver,outOfAmmo
var dictionaryWords = ["cat".split(""), "ricochet".split(""), "swift".split("")]
var randomIndex = 0
var tableFlipRef = "(╯ರ~ರ)╯︵┻━┻".split("")
var tableFlipTracker = 0
var keyWordArr = dictionaryWords[randomIndex]
var guessedWord = ("_".repeat(keyWordArr.length)).split("")
var acceptedInputs = "player, admin and alphabets"

//game logic
var gameFunction = function(inputLetter){
    //if inputLetter is in word then display them in the word
    //else add a character to the table flip and add the wrong character to wrong guesses
    if (inWord(inputLetter, keyWordArr)) {
        updateGuessedWord(inputLetter, keyWordArr)
        displayGuessed(guessedWord)
        if (!guessedWord.includes("_")){
            state = "gameOver"
            return "You win! Enter 'player' to play again, or 'admin' to add words to the dictionary."
        } else {
            return "Well done, now guess again!"
        }
    } else {
        if(tableFlipTracker < tableFlipRef.length){
            addWrongGuess(inputLetter)
            addTableFlip()
            return "Oops! Too bad!"
        } else {
            state = "gameOver"
            return "GAME OVER! Enter 'player' to play again, or 'admin' to add words to the dictionary."
        }
    }
}

//displays the guessed word so far
var displayGuessed = function(guessWordArr){
    document.getElementById("word").innerHTML = ""
    for(i=0;i<guessWordArr.length;i++){
        var newChar = document.createElement("span")
        newChar.innerHTML = guessWordArr[i] + " "
        document.getElementById("word").appendChild(newChar)
    }
}

//compares if the letter is in the word, update guessedWord
var updateGuessedWord = function(letter, keyWordArr){
    for (i=0;i<keyWordArr.length;i++){
        if(keyWordArr[i]==letter){
            guessedWord[i] = letter
        }
    }
}

//checks if a letter is in a given word, where word is represented by array
var inWord = function(inputLetter, wordArr){
    for(i=0;i<wordArr.length;i++){
        if(inputLetter==wordArr[i]){
            return true
        }
    }
    return false
}

//adds a character to wrongly guessed characters
var addWrongGuess = function(input){
    var wrongGuess = document.createElement("span")
    wrongGuess.innerHTML = input
    document.getElementById("wrong-guesses").appendChild(wrongGuess)

}


//adds a character to the table flip
var addTableFlip = function(){
    var newTFChar = document.createElement("span")
    newTFChar.innerHTML = tableFlipRef[tableFlipTracker]
    tableFlipTracker++
    document.getElementById("tableFlipper").appendChild(newTFChar)

}

//adds words to dictionary
var addWords = function(inputWord){
    var arrToAdd = inputWord.split('')
    dictionaryWords.push(arrToAdd)
}

//resets the game
var reset = function(){
    dictionaryWords.splice(randomIndex, 1)
    tableFlipTracker = 0
    document.getElementById("wrong-guesses").innerHTML = ""
    document.getElementById("tableFlipper").innerHTML = ""


    if(dictionaryWords.length==0){
        displayGuessed([])
        state="outOfAmmo"
        alert("No more words! Now in admin mode. Please enter new words.")
    } else {
        randomIndex = Math.floor(Math.random()*dictionaryWords.length)
        keyWordArr = dictionaryWords[randomIndex]
        guessedWord = ("_".repeat(keyWordArr.length)).split("")
        displayGuessed(guessedWord)
    }

}

//tests if input is valid ie 'player', 'admin', or one alphabet
var validInput = function(input){
    if(state=="player"){
        var allowedInputs = ["player", "admin"].concat("qwertyuiopasdfghjklzxcvbnm".split(""))
        acceptedInputs = 'player, admin and alphabets'
    } else if(state=="gameOver"){
        var allowedInputs = ["player", "admin"]
        acceptedInputs = 'player and admin'
    } else {
        return
    }
    return allowedInputs.includes(input)
}

//tests if new words are valid ie alphabets only
var validWords = function(newWord){
    var alphabetsOnly = "qwertyuiopasdfghjklzxcvbnm".split("")
    for(i=0;i<newWord.length;i++){
        if (!alphabetsOnly.includes(newWord[i])){
            return false
        }
    }
    return true
}

displayGuessed(guessedWord)

var inputHappened = function(input){
    input = input.toLowerCase()
    if (!validInput(input)&&state!=="admin"&&state!=="outOfAmmo"){
        return `Invalid input. Only ${acceptedInputs} are accepted.`
    }
    if(state=="player"){
        if(input=="admin"){
            state="admin"
            return "Now in admin state. Add words to dictionary or enter 'player' to play."
        } else {
            return gameFunction(input)
        }
    } else if (state=="admin" || state=="outOfAmmo"){
        if(input=="player"){
            if(state=="outOfAmmo"){
                reset()
            }
            state = "player"
            return "Now ready to play the game! Enter your guess, one letter at a time."
        } else {
            if(!validWords(input)){
                return "Invalid word. Only alphabets allowed, no numbers or special characters."
            }
            addWords(input)
            return "Enter another word or enter 'player' to play."
        }
    } else if (state=="gameOver"){
        reset()
        if (state=="outOfAmmo"){
            return "Enter new words."
        } else if (input=="player"){
            state = "player"
            return "Enter a guess!"
        } else if(input=="admin"){
            state = "admin"
            return "Now in admin state. Add words to dictionary or enter 'player' to play."
        }
    }


};