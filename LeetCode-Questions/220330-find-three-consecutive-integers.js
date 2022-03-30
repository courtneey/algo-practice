/*

Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

*/

function sumOfThree(num) {
  let num3 = Math.floor(num / 3 + 1);
  let num2 = num3 - 1;
  let num1 = num2 - 1;

  if (num1 + num2 + num3 === num) {
    return [num1, num2, num3];
  } else {
    return [];
  }
}
