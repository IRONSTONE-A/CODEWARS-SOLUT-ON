// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//? solution

function isSortedAndHow(array) {
    return array.join('') === [...array].sort((a, b) => a-b).join('') ? 'yes, ascending' : array.join('') === [...array].sort((a, b) => b-a).join('') ? 'yes, descending' : 'no'
  }

