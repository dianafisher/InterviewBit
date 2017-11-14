/* countElementOccurence.js

Given a sorted array of integers, find the number of occurrences of a given target value.
Your algorithm’s runtime complexity must be in the order of O(log n).
If the target is not found in the array, return 0.

**Example : **
Given [5, 7, 7, 8, 8, 10] and target value 8,
return 2.

*/

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  findCount : function(A, B){

    var firstIndex = this.findIndex(A, A.length, B, true)
    console.log(`firstIndex = ${firstIndex}`)

    if (firstIndex == -1) {
      return 0
    } else {
      var lastIndex = this.findIndex(A, A.length, B, false)
      console.log(`lastIndex = ${lastIndex}`)
      return lastIndex - firstIndex + 1
    }

  },

  findIndex: function(A, n, x, isFirst) {
    var low = 0, high = n-1, result = -1;
    while (low <= high) {
      var mid = Math.floor((low + high)/2);

      if (A[mid] == x) {
        result = mid;
        if (isFirst) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (x < A[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return result;
  },


  /* Performs a binary search to find the first occurrence of x. */
  findFirst: function(A, n, x) {
    var low = 0, high = n-1, result = -1;
    while(low <= high) {
      var mid = Math.floor((low + high)/2)

      if (A[mid] == x) {
        result = mid;
        high = mid - 1;  // Continue searching towards the left
      }
      else if (x < A[mid]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return result;
  },

  findLast: function(A, n, x) {
    var low = 0, high = n-1, result = -1;
    while(low <= high) {
      var mid = Math.floor((low + high)/2)

      if (A[mid] == x) {
        result = mid;
        low = mid + 1;  // Continue searching towards the right
      }
      else if (x < A[mid]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return result;
  },

  binarySearch: function(A, n, x) {
    var low = 0, high = n-1;
    while(low <= high) {
      var mid = Math.floor((low + high)/2)

      if (A[mid] == x) return mid;
      else if (x < A[mid]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return -1; // not found
  }


};

let A = [5, 7, 7, 8, 8, 10]
let B = 8

let count = module.exports.findCount(A, B)
console.log(count)

A = [1, 1, 3, 3, 5, 5, 5, 5, 5, 9, 9, 11]
B = 5

count = module.exports.findCount(A, B)
console.log(count)

count = module.exports.findCount(A, 10)
console.log(count)