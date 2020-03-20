console.log("hello script js");

var attempt = 0;
var totalSecretFound = 0;
var result = false;
var secret = ['c', 'a', 't'];

function search(array, data, nAttempt, nMatch, aResult) {
  for (var i = 0; i < array.length; i++) {
    var response;
    if (array[i] === data) {
      nAttempt++;
      nMatch++;
      response = "Letter uncovered: " + array[i].toString() + " . Attempts Taken: " + nAttempt.toString();
      console.log(response);
      return true;
    } else if (i === array.length - 1 && array[i] !== data) {
      nAttempt++;
      response = "No letter uncovered. " + "Attempts Taken: " + nAttempt.toString();
      console.log(response);
      return false;
    }

    // Condition 1: Element matches data => return true array[i] == data
    // Condition 2: End of array && element doesn't match data => return false 
  };
};

var inputHappened = function (currentInput) {
  console.log(currentInput);

  // var hangmanString = '(╯ರ ~ ರ）╯︵ ┻━┻';
  // var hangmanArray = hangmanString.split('');

  var letterToSearch = currentInput.toString();

  var wordFound = false;

  var check = search(secret, letterToSearch, attempt, totalSecretFound);
  if (check == true) {
    totalSecretFound++;
    attempt++;
    console.log(totalSecretFound);
    console.log(attempt);
  } else {
    attempt++;
    console.log(totalSecretFound);
    console.log(attempt);
  }

};


//return "WOW SOMETHING HAPPEND";
;
