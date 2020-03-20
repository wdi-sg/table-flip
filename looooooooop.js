// var arrayToSearch = [1,2,3,4,5,6,];
// var toFind = 6;

// function search (array, data) {
//     for (var i = 0; i <array.length; i++) {
//         if (array[i] == data){
//             return array[i];
//         }
//     }
// }

// var answer = search(arrayToSearch,toFind);
// answer
var arrayToSearch = [1, 2, 7, 4, 5, 6, 13];
var toFind = 13;

function search(array, data) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === data) {
            return true;
        } else if (i === array.length - 1 && array[i] !== data) {
            return false;
        }

        // Condition 1: Element matches data => return true array[i] == data
        // Condition 2: End of array && element doesn't match data => return false 
    }
}

var answer = search(arrayToSearch, toFind);
answer

console.log(arrayToSearch[arrayToSearch.length - 1])