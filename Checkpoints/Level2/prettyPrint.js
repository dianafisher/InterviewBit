/* spiralOrder.js

Print concentric rectangular pattern in a 2d matrix.

The outermost rectangle is formed by A, then the next outermost is formed by A-1 and so on.

You will be given A as an argument to the function you need to implement, and you need to return a 2D array.

Input: A = 4.

Output:

4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4

Input: A = 3.

Output:

3 3 3 3 3
3 2 2 2 3
3 2 1 2 3
3 2 2 2 3
3 3 3 3 3

*/

module.exports = {
  //param A : integer
  //return a array of array of integers
  prettyPrint : function(A){
    var n = 2*A - 1

    // Initialize the result 2D array
    var result = []
    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        row.push(0);
      }
      result.push(row);
    }

    // Use spiral logic to fill in the array

    var left = 0;
    var right = n-1;
    var top = 0;
    var bottom = n-1;
    var direction = 0;  // left to right

    while(left <= right && top <= bottom) {
      if (direction == 0) {
        for (var i = left; i <= right; i++) {
          result[top][i] = A;
        }
        top += 1
        direction = 1
      } else if (direction == 1) {  // top to bottom
        for (var i = top; i <= bottom; i++) {
          result[i][right] = A;
        }
        right -= 1;
        direction = 2
      } else if (direction == 2) {  // right to left
        for (var i = right; i >= left; i--) {
          result[bottom][i] = A;
        }
        bottom -= 1;
        direction = 3
      } else if (direction == 3) {  // bottom to top
        for (var i = bottom; i >= top; i--) {
          result[i][left] = A;
        }
        left += 1;
        direction = 0;
        A--;
      }
    }


    return result;
  }
};

let a = module.exports.prettyPrint(4)
console.log(a)

let b = module.exports.prettyPrint(3)
console.log(b)