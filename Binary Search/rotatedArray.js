/* rotatedArray.js

Suppose a sorted array A is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array will not contain duplicates.

*/

module.exports = {
  //param A : array of integers
  //return an integer
  findMin : function(A){
    var n = A.length
    var low = 0, high = n-1;
    while(low <= high) {
      if (A[low] <= A[high]) {
        return low;
      }
      var mid = Math.floor((low + high) / 2);
      var next = (mid+1) % n;
      var prev = (mid-1) % n;

      if (A[mid] <= A[next] && A[mid] <= A[prev]) {
        return mid;
      } else if (A[mid] <= A[high]) {
        high = mid - 1;
      } else if (A[mid] >= A[low]) {
        low = mid + 1;
      }
    }
    return -1;
  }
};

var A = [2, 3, 5, 8, 11, 12];

var m = module.exports.findMin(A);
console.log(m)

A = [4, 5, 6, 7, 0, 1, 2];

m = module.exports.findMin(A);
console.log(m)

A = [15, 22, 23, 28, 31, 38, 5, 6, 8, 10, 12];

m = module.exports.findMin(A);
console.log(m)

A = [1, 2, 3, 4, 5, 6, 7, 8 ,9];

m = module.exports.findMin(A);
console.log(m)