/* spiralOrder.js

Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.

*/

module.exports = {
  //param A : array of array of integers
  //return a array of integers
  spiralOrder : function(A) {
    let cols = A.length;
    let rows = A[0].length;

    console.log(`cols ${cols}, rows: ${rows}`);

    let left = 0;
    let right = cols - 1;
    let top = 0;
    let bottom = rows -1;
    let direction = 0;  // left to right

    let result = [];

    while(left <= right && top <= bottom) {
      if (direction == 0) {  // left to right
        for(let i = left; i <= right; i++) {
          result.push(A[top][i]);
        }
        top += 1
        direction = 1
      } else if (direction == 1) { // top to bottom
        for (let i = top; i <= bottom; i++) {
          result.push(A[i][right]);
        }
        right -= 1;
        direction = 2;
      } else if (direction == 2) { // right to left
        for (let i = right; i >= left; i--) {
          result.push(A[bottom][i]);
        }
        bottom -= 1;
        direction = 3;
      } else if (direction == 3) { // bottom to top
        for (let i = bottom; i >= top; i--) {
          result.push(A[i][left]);
        }
        left += 1;
        direction = 0;
      }
    }

    return result;
  }
};

let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let sa = module.exports.spiralOrder(A)
console.log(sa)

let B = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
let sb = module.exports.spiralOrder(B)
console.log(sb)

let C = [[2, 4, 6, 8], [5, 9, 12, 16], [2, 11, 5, 9], [3, 2, 1, 8]]
let sc = module.exports.spiralOrder(C)
console.log(sc)