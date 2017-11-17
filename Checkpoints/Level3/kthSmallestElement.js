/* Kth Smallest Element in the Array

Find the kth smallest element in an unsorted array of non-negative integers.

*/


module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  kthsmallest : function(A, B){

    // Find min and max values in array
    var max = A.reduce(function(a, b) {
      return Math.max(a, b);
    });
    var min = A.reduce(function(a, b) {
      return Math.min(a, b);
    });

    // console.log(`min: ${min}, max: ${max}`);

    var low = min;
    var high = max;

    // Perform binary search to find the kth smallest element.
    while (low <= high) {
      // Calculate mid as the midpoint between current high and low.
      var mid = low + Math.floor((high-low)/2);
      // console.log(`low: ${low}, high: ${high}, mid: ${mid}`);
      var count = 0;
      var numEqual = 0;

      // Count the number of elements less than mid and equal to mid.
      for (var i = 0; i < A.length; i++) {
        if (A[i] < mid) {
          count++;
        } else if (A[i] == mid) {
          numEqual++;
        }
        if (count >= B) break;
      }

      if (count < B && count + numEqual >= B) {
        return mid;
      } else if (count >= B) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;

  },

  contains : function(A, x) {
    var count = A.length;
    for (var i = 0; i < count; i++) {
      if (A[i] === x) return true;
    }
    return false;
  },

  bruteForce: function(A, B) {
    var count = 0;
    var seen = [];

    while (count < B) {
      var min = Number.POSITIVE_INFINITY;
      var idx = -1;
      for (var i = 0; i < A.length; i++) {
        if (A[i] < min) {

          if (!this.contains(seen, i)) {
            min = A[i]
            idx = i
          }
        }
      }

      seen.push(idx);
      // console.log(`min = ${min}`);
      // console.log(set);
      count++;
      // console.log(set);
    }

    var lastAdded = seen.pop();
    return A[lastAdded]
  }


};

var A = [2, 1, 4, 3, 2]
console.log(module.exports.kthsmallest(A, 3))  // should return 2

A = [ 8, 16, 80, 55, 32, 8, 38, 40, 65, 18, 15, 45, 50, 38, 54, 52, 23, 74, 81, 42, 28, 16, 66, 35, 91, 36, 44, 9, 85, 58, 59, 49, 75, 20, 87, 60, 17, 11, 39, 62, 20, 17, 46, 26, 81, 92 ];
console.log(module.exports.kthsmallest(A, 9))  // should return 17
