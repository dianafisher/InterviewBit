/* minStepsInfiniteGrid.js

You are in an infinite 2D grid where you can move in any of the 8 directions :

(x,y) to
    (x+1, y),
    (x - 1, y),
    (x, y+1),
    (x, y-1),
    (x-1, y-1),
    (x+1,y+1),
    (x-1,y+1),
    (x+1,y-1)

You are given a sequence of points and the order in which you need to cover the points.
Give the minimum number of steps in which you can achieve it. You start from the first point.

Example :

Input : [(0, 0), (1, 1), (1, 2)]
Output : 2


*/


module.exports = {
  //param A : array of integers
  //param B : array of integers
  //Points are represented by (A[i], B[i])
  //return an integer
  coverPoints : function(A, B){
    var numPoints = A.length;
    if (numPoints <= 1) return 0;

    var x = A[0];
    var y = B[0];

    var minSteps = 0;

    for (var i = 1; i < numPoints; i++) {
      // console.log(`x: ${x}, y: ${y}`);
      var nextX = A[i];
      var nextY = B[i];
      // console.log(`nextX: ${nextX}, nextY: ${nextY}`);

      var deltaX = Math.abs(x - nextX);
      var deltaY = Math.abs(y - nextY);

      // console.log(`deltaX: ${deltaX}, deltaY: ${deltaY}`);

      if (deltaX == deltaY) {
        // move both the same amount.
        x += deltaX;
        y += deltaY;
        minSteps += deltaX;
      } else if (deltaX > deltaY) {
        minSteps += deltaX;
      } else {
        minSteps += deltaY;
      }

      x = nextX;
      y = nextY;
    }

    return minSteps;
  }
};

var A = [-2];
var B = [7];
console.log(module.exports.coverPoints(A, B));  // expect 0.

A = [-7, -13];
B = [1, -5]
console.log(module.exports.coverPoints(A, B));  // expect 6.

A = [0, 1, 1];
B = [0, 1, 2];
console.log(module.exports.coverPoints(A, B));  // expect 2.

A = [4, 8, -7, -5, -13, 9, -7, 8];
B =  [4, -15, -10, -3, -13, 12, 8, -8];
console.log(module.exports.coverPoints(A, B));  // expect 108.