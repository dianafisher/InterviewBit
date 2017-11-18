/* nextGreater.js

Given an array, find the next greater element G[i] for every element A[i] in the array.

The Next greater Element for an element A[i] is the first greater element on the right side of A[i] in array.
More formally,

G[i] for an element A[i] = an element A[j] such that
    j is minimum possible AND
    j > i AND
    A[j] > A[i]


Elements for which no greater element exist, consider next greater element as -1.

Example:

Input : A : [4, 5, 2, 10]
Output : [5, 10, 10, -1]

Example 2:

Input : A : [3, 2, 1]
Output : [-1, -1, -1]

*/

module.exports = {
  //param A : array of integers
  //return a array of integers
  nextGreater : function(A){

    var result = [];
    for (var i = 0; i < A.length; i++) {
      var found = false;
      for (var j = i+1; j < A.length; j++) {
        if (A[j] > A[i]) {
          result.push(A[j]);
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(-1);
      }
    }
    return result;
  }
};

var A = [4, 5, 2, 10];
var B = module.exports.nextGreater(A);
console.log(B);  // expect [5, 10, 10, -1]

A = [3, 2, 1];
B = module.exports.nextGreater(A);
console.log(B);  // expect [-1, -1, -1]
