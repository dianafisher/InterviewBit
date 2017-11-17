/* numrange.js

Given an array of non negative integers A, and a range (B, C),
find the number of continuous subsequences in the array which have sum S in the range [B, C] or B <= S <= C

Continuous subsequence is defined as all the numbers A[i], A[i + 1], .... A[j]
where 0 <= i <= j < size(A)

Example:

A : [10, 5, 1, 0, 2]
(B, C) : (6, 8)

ans = 3
as [5, 1], [5, 1, 0], [5, 1, 0, 2] are the only 3 continuous subsequence with their sum in the range [6, 8]

*/

module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  numRange : function(A, B, C){
    var count = 0;

    var i = 0
    var j = 0;
    var S = 0;

    while (i < A.length) {
      S += A[j];

      if (S >= B && S <= C) {
        // increase count
        count += 1;
        // increase j
        j += 1;
      } else if (S < B) {
        j += 1;
      } else if (S > C) {
        // move to next index in array
        i += 1;
        j = i;
        // reset S
        S = 0;
      }

      // If j reached the end of the array..
      if (j == A.length) {
        S = 0;
        i += 1;
        j = i;
      }
    }

    return count;
  }
};

var A = [10, 5, 1, 0, 2]
var B = 6, C = 8;

console.log(module.exports.numRange(A, B, C));

