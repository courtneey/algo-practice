/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

*/

function minPathSum(grid) {
  // create a new grid of size m*n to track min sums along each path
  const sumsGrid = new Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length).fill(null));

  // populate sumsGrid with path sums of first row and first col of input grid
  let currentSum = 0;
  for (let i = 0; i < sumsGrid[0].length; i++) {
    sumsGrid[0][i] = grid[0][i] + currentSum;
    currentSum = sumsGrid[0][i];
  }

  currentSum = 0;
  for (let i = 0; i < sumsGrid.length; i++) {
    sumsGrid[i][0] = grid[i][0] + currentSum;
    currentSum = sumsGrid[i][0];
  }

  // starting at first empty cell of sumsGrid (sumsGrid[1][1]),
  // find min val between current cell of input grid + left cell of SumsGrid vs upper cell
  // populate current cell of sumsGrid with that value
  for (let i = 1; i < sumsGrid.length; i++) {
    const row = sumsGrid[i];
    for (let j = 1; j < row.length; j++) {
      const currCell = grid[i][j];
      const leftSum = currCell + sumsGrid[i][j - 1];
      const upperSum = currCell + sumsGrid[i - 1][j];
      sumsGrid[i][j] = Math.min(leftSum, upperSum);
    }
  }

  // return bottom right value of sumsGrid
  return sumsGrid[sumsGrid.length - 1][sumsGrid[0].length - 1];
}
