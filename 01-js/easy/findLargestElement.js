/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length<1){
        return undefined;
    }
    var maxele = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>maxele){
            maxele=numbers[i];
        }
    }
    return maxele;
}

module.exports = findLargestElement;