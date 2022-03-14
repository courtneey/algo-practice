/*

Write a function that takes in a non-empty array of arbitrary intervals,
merges any overlapping intervals, and returns the new intervals in no particular
order.

Each interval 'interval' is an array of two integers, with 'interval[0]' as the
start of the interval and 'interval[1]' as the end of the interval.

Note that back-to-back intervals aren't considered to be overlapping.

*/

function mergeOverlappingIntervals(array) {
  // sort intervals by first value
  array.sort((a, b) => a[0] - b[0]);

  const result = [];

  let prev = array[0];

  for (let i = 1; i < array.length; i++) {
    const current = array[i];

    if (prev[0] < current[0] && prev[1] > current[1]) {
      // do nothing if previous interval contains entirety of current interval
      continue;
    } else if (prev[1] >= current[0]) {
      // if current interval would contain some numbers of previous interval, merge them
      prev = [prev[0], current[1]];
    } else {
      // otherwise, if current interval does not overlap with previous interval, reassign prev
      result.push(prev);
      prev = current;
    }
  }

  // after exiting the for-loop, the updated value of prev still needs to be captured
  result.push(prev);

  return result;
}
