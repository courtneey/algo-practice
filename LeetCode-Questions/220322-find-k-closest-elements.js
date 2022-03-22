/*

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b

*/

function findClosestElements(arr, k, x) {
  // create hash table to store distances between each num of arr and x
  const distances = {};

  let result = [];

  // loop through input array
  for (let i = 0; i < arr.length; i++) {
    // compute distance between current number and x
    const current = arr[i];
    const currentDistance = Math.abs(current - x);

    // add current distance to hash table if it doesn't exist
    if (!distances[current]) {
      distances[current] = currentDistance;
    }

    // if result array is not full, push current number and continue onto next iteration
    if (result.length < k) {
      result.push(current);
      continue;
    }

    // check if current distance is greater than first element of result
    // or if they are equal and the current number is greater than the first element of result
    // in both cases, it means any subsequent numbers will only be further away from x, so return result
    if (
      currentDistance > distances[result[0]] ||
      (currentDistance === distances[result[0]] && current > result[0])
    ) {
      return result;
    } else if (currentDistance < distances[result[0]]) {
      // otherwise, if the current distance is less than the first element of result, update result
      result = result.slice(1);
      result.push(current);
    }
  }

  return result;
}
