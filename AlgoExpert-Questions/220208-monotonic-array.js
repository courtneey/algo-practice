/*

Write a function that takes in an array of integers and returns a boolean
representing wheather the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are
entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply
don't increase. Similarly, non-decreasing elements aren't necessarily
exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

*/

function isMonotonic(array) {
  let increasing = null;
  let decreasing = null;
  let prev = array[0];

  for (let i = 1; i <= array.length; i++) {
    if (increasing && decreasing) return false;
    if (array[i] < prev) decreasing = true;
    if (array[i] > prev) increasing = true;
    prev = array[i];
  }

  return true;
}
