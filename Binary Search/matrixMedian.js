/* matrixMedian.js

Given a N by M matrix in which each row is sorted, find the overall median of the matrix. Assume N*M is odd.

Matrix =

[1, 3, 5]
[2, 6, 9]
[3, 6, 9]

A = [1, 2, 3, 3, 5, 6, 6, 9, 9]

Median is 5. So, we return 5.

The "median" is the "middle" value in a list of numbers.

*/

module.exports = {
 //param A : array of array of integers
 //return an integer
  findMedian : function(A){
    var max = Number.MIN_VALUE
    var min = Number.MAX_VALUE

    // Find min and max element.
    var rows = A.length;
    var cols = A[0].length;

    // console.log(`rows: ${rows}, cols: ${cols}`);

    for (var i = 0; i < rows; i++) {

      // Get min element in matrix
      if (A[i][0] < min) {
        min = A[i][0];
      }

      // Get max element in matrix
      if (A[i][cols-1] > max) {
        max = A[i][cols-1];
      }
    }

    // console.log(`min: ${min}, max: ${max}`)

    var desired = Math.floor((rows * cols + 1) / 2);
    // console.log(`desired: ${desired}`);


    while (min < max) {
      // console.log(`min: ${min}, max: ${max}`)
      var mid = min + Math.floor((max - min) / 2);
      // console.log(`mid: ${mid}`);
      var place = 0;

      // Count the number of elements less than mid
      for (var i = 0; i < rows; i++) {
        // console.log(`mid: ${mid}, A[i]: ${A[i]}`);
        var j = this.bisectRight(A[i], mid);
        // console.log(`j: ${j}`);
        place += j;
      }
      // console.log(`place: ${place}`);
      if (place < desired) {
          min = mid + 1
      } else {
        max = mid;
      }

    }

    return min;
  },

  // bisectRight returns the insertion point for k in array A to maintain sorted order.
  bisectRight: function(A, k) {
    for (var i = 0; i < A.length; i++) {
      if (A[i] > k) return i;
    }
    return A.length;
  }
};

var A = [[1, 3, 5],[2, 6, 9],[3, 6, 9]];
var m = module.exports.findMedian(A);
console.log(`m = ${m}`)