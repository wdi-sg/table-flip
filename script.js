var alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","q","y","z"]
var secretWord =["C","A","T"];
var answerFound = false;
var i = 0;

while( i<alphabets.length){
    console.log("i is: "+ i);
    console.log("array value: "+alphabets[i] );
    if(alphabets[i] === secretWord ){
    console.log("Right Answer!");
    answerFound = true;
    }
    i = i +1;
}
if(answerFound === true){
    console.log("Great, now we can move on!");
} else {
    console.log("Not found!")
}