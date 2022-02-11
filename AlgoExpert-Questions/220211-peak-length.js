/*

Write a function that takes in an array of integers and returns the length of the
longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing
until they reach a tip (the highest value in the peak), at which point they become
strictly decreasing. At least three integers are required to form a peak.

For example, the integers [1, 4, 10, 2] form a peak, but the integers [4, 0, 10]
don't and neither do the integers [1, 2, 2, 0]. Similarly, the integers [1, 2, 3]
don't form a peak because there aren't any strictly decreasing integers after the 3.

*/

function longestPeak(array) {
  let peakLength = 0;

  for (let i = 1; i < array.length - 1; i++) {
    // check if current element is a peak
    if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
      // if so, set pointers at both adjacent numbers
      // and adjust them until the next number is >= the pointer
      let left = i - 1;
      let right = i + 1;
      while (array[left] !== undefined && array[left - 1] < array[left]) {
        left--;
      }

      while (array[right] !== undefined && array[right + 1] < array[right]) {
        right++;
      }

      // then, update peakLength accordingly
      const newPeakLength = array.slice(left, right + 1).length;
      if (newPeakLength > peakLength) peakLength = newPeakLength;
    }
  }

  return peakLength;
}
