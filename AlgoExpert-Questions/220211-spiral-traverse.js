/*

Write a function that takes in an n x m two-dimensional array (that can be square-
shaped when n == m) and returns a one-dimensional array of all the array's elements
in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to
the right, and proceeds in a spiral pattern all the way until every element has
been visited.

*/

function spiralTraverse(array) {
  const result = [];

  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      // push values to result from left to right
      result.push(array[startRow][i]);
    }

    if (startRow + 1 > endRow) break;

    for (let i = startRow + 1; i <= endRow; i++) {
      // push values to result from up to down
      result.push(array[i][endCol]);
    }

    if (endCol - 1 < startCol) break;

    for (let i = endCol - 1; i >= startCol; i--) {
      // push values to result from right to left
      result.push(array[endRow][i]);
    }

    if (endRow - 1 < startRow) break;

    for (let i = endRow - 1; i > startRow; i--) {
      // push values to result from down to up
      result.push(array[i][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}
