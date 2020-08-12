var wordDictionary = {
    meeeeee : 1,
    aaaasssdddjjjlll: 1,
    ijasijdkemmmmmmiiiiieeellll: 1
};
var trackLetters = {};
var end = "(╯ರ ~ ರ）╯︵ ┻━┻".split("")
var state = 0, wrongs = 0, correctLetters = 0, word, dashes;
var inputHappened = function(currentInput){
    var inp = currentInput.toLowerCase();
    if(inp == "start"){
        wrongs = 0, state = 1, correctLetters = 0;
        word = randomWordGenerator();
        dashes = word.split("").map(x => x = "_")
        return disText(wrongs);
    }
    if(inp == "reset"){
        state = 0;
        resetObject(trackLetters);
        return "Welcome to Table flip type 'start' and hit enter to begin. \n Type 'admin' to add a new word.";
    }
    if(inp == "admin" && state == 0 || state == 3) {
        if(state == 0) {
            state = 3;
            return "Input word that you would like to add.";
        }
        else {
            state = 0;
            if(!(/[0-9]/g).test(currentInput)){
                state = 0;
                wordDictionary[currentInput.toLowerCase()] = 1;
                return "Welcome to Table flip type 'start' and hit enter to begin. \n Type 'admin' to add a new word."
            }
            else{
                return "Please input valid word without numbers";}
        }
    }
    if(state == 1){
        if((currentInput.match(/^[a-z]$/gi)||[]).length === 1){
            if(checkLetters(inp)){
                if(correctLetters !== word.length + 1){
                    updateCorrectLetters(inp)
                    var index = getIndex(inp);
                    var answer = wordLength(index, inp);
                    if (correctLetters == word.length) {
                        state = 4;
                    return "The secret word is " + answer + "." + printFlip(wrongs) + "\n You guess it!! \n Type 'reset' to start a new game.";}
                    else {
                        return "The secret word is " + wordLength(index, inp) + "." + printFlip(wrongs);}
            }
            }
            else if((currentInput.match(/^[a-z]$/gi)||[]).length === 1) {
                wrongs++;
                return disText(wrongs);
            }
        }
            else
                return "Please input a valid character \n" + disText(wrongs)
    }
    if(state == 4){
        return "The secret word is " + wordLength(index, inp) + "." + printFlip(wrongs) + "\n You guess it!! \n Type 'reset' to start a new game.";}
    else
        return "Welcome to Table flip type 'start' and hit enter to begin. \n Type 'admin' to add a new word.";
};
function disText(x) {
    if(x >= end.length){
        state = 2;
        return lostDis();}
    return "The secret word is " + wordLength() + "." + printFlip(wrongs);
}
function randomWordGenerator() {
     return Object.keys(wordDictionary)[Math.floor(Math.random() * (Object.keys(wordDictionary)).length)];
}
function wordLength(index, character) {
    if(index >= 0) {
        for(let i=0;i<word.length;i++){
            if(character === word[i]){
                dashes[i] = character;
            }
        }
    }
    return dashes.join(" ");
}
function printFlip(x) {
    var flip = "\n \n";
    for(let i=0;i<x;i++){flip += end[i];}
    return flip;
}
function checkLetters(x){
    if(trackLetters[x]){
        return false;}
    else {
        trackLetters[x] = 1;}
    var regexp = new RegExp(x, "gi");
    return regexp.test(word);
    }
function lostDis() {
    return "The secret word is " + wordLength() + "." + printFlip(wrongs) + "\n \n You have lost :(. \n Type 'reset' and press enter to start a new game.";
}
function getIndex(c) {
    for(let i=0;i<word.length;i++){
        if(c == word[i]){
            return i;}
    }
}
function updateCorrectLetters(x) {
    for(let i=0;i<word.length;i++){
        if(x == word[i])
            correctLetters++;
    }
}
function resetObject(obj) {
    for(var i in obj)
        delete trackLetters[i];
}