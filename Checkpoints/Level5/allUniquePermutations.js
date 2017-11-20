/* allUniquePermutations.js

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example :
[1,1,2] have the following unique permutations:

[1,1,2]
[1,2,1]
[2,1,1]

*/

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  permute : function(A){
    var result = [];

    this.permutations(A, 0, result);

    return result;
  },

  /*
    Generate all permuations that begin with A[0], then all that begin with A[1], etc.
  */
  permutations: function(A, idx, result) {

    if (idx >= A.length) {
      // create a copy of the array before pushing to result array.
      var temp = A.slice();
      result.push(temp);
      return;
    }

    for (var i = idx; i < A.length; i++) {
      if (!this.hasDuplicate(A, idx, i)) {
        this.swap(A, i, idx);
        this.permutations(A, idx + 1, result);
        // restore original order
        this.swap(A, i, idx);
      }

    }
  },

  swap: function(A, i, j) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  },

  hasDuplicate: function(A, start, end) {
    for (var i = start; i < end; i++) {
      if (A[i] == A[end]) return true;
    }
    return false;
  }
};

var A = [1, 1, 2]
console.log(module.exports.permute(A));  // expect [1, 1, 2], [1, 2, 1], and [2, 1, 1]

A = [1, 2]
console.log(module.exports.permute(A));  // expect [1, 2] and [2, 1]

A = [1, 2, 3]
console.log(module.exports.permute(A));  // expect [1 2 3 ] [1 3 2 ] [2 1 3 ] [2 3 1 ] [3 1 2 ] [3 2 1 ]
