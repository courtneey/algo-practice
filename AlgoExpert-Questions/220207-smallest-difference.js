/*

Write a function that takes in two non-empty arrays of integers, finds the pair
of numbers (one from each array) whose absolute difference is closest to zero,
and returns an array containing these two numbers, with the number from the first
array in the first position.

Note that the absolute difference of two integers is the distance between them
on the real number line. For example, the absolute difference of -5 and 5 is 10,
and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest
difference.

*/

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let arrayOneIdx = 0;
  let arrayTwoIdx = 0;
  let minVal = Infinity;
  let result = [];

  while (arrayOneIdx < arrayOne.length && arrayTwoIdx < arrayTwo.length) {
    const arrayOneElement = arrayOne[arrayOneIdx];
    const arrayTwoElement = arrayTwo[arrayTwoIdx];
    const absDifference = Math.abs(arrayOneElement - arrayTwoElement);
    if (absDifference === 0) {
      return [arrayOneElement, arrayTwoElement];
    }

    if (absDifference < minVal) {
      minVal = absDifference;
      result = [arrayOneElement, arrayTwoElement];
    }

    if (arrayOneElement < arrayTwoElement) {
      arrayOneIdx++;
    } else {
      arrayTwoIdx++;
    }
  }

  return result;
}
