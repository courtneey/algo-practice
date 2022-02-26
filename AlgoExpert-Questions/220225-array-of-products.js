/*

Write a function that takes in a non-empty array of integers and returns an
array of the same length, where each element in the output array is equal to
the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of every number
in the input array other than input[i].

Note that you're expected to solve this problem without using division.

*/

// O(n^2) time complexity:
function arrayOfProducts(array) {
  const copy = array.slice(1);
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let currentProduct = 1;
    if (i > 0) {
      // replace prev element of copy with prev element of array
      copy[i - 1] = array[i - 1];
    }
    // multiply currentProduct by every element of copy
    for (let j = 0; j < copy.length; j++) {
      currentProduct *= copy[j];
    }

    // push currentProduct to result
    result.push(currentProduct);
  }

  return result;
}

// O(n) time complexity:
function arrayOfProducts(array) {
  const left = [];
  const right = [];
  const result = [];

  // populate arrays with initial values of 1
  for (let i = 0; i < array.length; i++) {
    left.push(1);
    right.push(1);
    result.push(1);
  }

  // calculate products to the left of each element
  let leftProduct = 1;
  for (let i = 0; i < array.length; i++) {
    left[i] = leftProduct;
    leftProduct *= array[i];
  }

  // calculate products to the right
  let rightProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    right[i] = rightProduct;
    rightProduct *= array[i];
  }

  // multiply corresponding products
  for (let i = 0; i < result.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}
