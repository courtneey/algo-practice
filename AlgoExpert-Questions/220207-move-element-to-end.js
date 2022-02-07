/*

You're given an array of integers and an integer. Write a function that moves
all instances of that integers in the array to the end of the array and returns
the array.

The function should perform this in place(i.e., it should mutate the input array)
and doesn't need to maintain the order of the other integers.

*/

function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const leftNum = array[left];
    const rightNum = array[right];

    if (leftNum === toMove && rightNum === toMove) {
      right--;
    } else if (leftNum === toMove) {
      array[left] = rightNum;
      array[right] = leftNum;
      left++;
      right--;
    } else {
      left++;
    }
  }
  return array;
}
