/*

A robot is located at the top-left corner of an A x B grid.

The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid.

How many possible unique paths are there?

Note: A and B will be such that the resulting answer fits in a 32 bit signed integer.

*/

function gridUniquePaths(A, B) {

  // use combinatorics..

  var m = A-1;
  var n = B-1;

  var value = factorial(m+n)
  // console.log(value);
  var divisor = factorial(m) * factorial(n);
  // console.log(divisor);
  var result = Math.floor(value / divisor);
  return result;

  function factorial(n) {

    if (n == 1) { return 1; }
    if (n == 2) { return 2; }
    return n * factorial(n-1);
  }
}

function gridUniquePathsRecursive(A, B) {
  var paths = helper(A, B);
  // console.log(paths);
  return paths;

  function helper(m, n) {
    if (m == 1 || n == 1) {
      return 1;
    }

    return helper(m-1, n) + helper(m, n-1);
  }
}

var A = 2;
var B = 2;
console.log(gridUniquePaths(A, B)); // 2 (0,0) -> (0,1) -> (1,1)  and (0,0) -> (1,0) -> (1,1)

A = 7;
B = 2;
console.log(gridUniquePaths(A, B));

A = 100;
B = 1;

console.log(gridUniquePathsRecursive(A, B));