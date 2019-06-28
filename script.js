var secretArray = ['c', 'a', 't'];
var userArray = [];
var matchingLetters = [];


var checkForMatch = function(input) {
    var smallWord = input.toLowerCase();
    userArray = smallWord.split("");
    //use a nested for loop to compare the value in both arrays. inner loop will run completely each time.
    for (let i = 0; i < secretArray.length; i++) {
        for (let j = 0; j < userArray.length; j++) {
            if (secretArray[i] === userArray[j]) {
                matchingLetters.push(secretArray[i]);
                console.log(matchingLetters);
            }
        }
    }
    display(`These are the letters you have matching the secret word : ${matchingLetters}`);
};