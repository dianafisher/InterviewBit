/* longestConsecutiveSequence.js

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Example:
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.

*/

module.exports = {
  //param A : array of integers
  //return an integer
  longestConsecutive : function(A){

    if (A.length == 0) return 0;
    if (A.length == 1) return 1;

    // Create an object to hold onto unique integers.
    var set = {};
    var maxLength = Number.MIN_VALUE;

    // Add all numbers to the set
    for (var i = 0; i < A.length; i++) {
      if (!set[A[i]]) {
        set[A[i]] = true;
      }
    }
    // console.log(set);

    // Loop through each element and check for consecutive elements.
    for (var i = 0; i < A.length; i++) {

      var length = 1;  // initially, there is one of this element.
      var prev = A[i] - 1;
      var next = A[i] + 1;

      // Count the number of elements in the set which are before A[i] in the sequence.
      while (set[prev]) {
        length++;
        set[prev] = false;
        prev--;
      }

      // Count the number of elements in the set which are after A[i] in the sequence.
      while (set[next]) {
        length++;
        set[prev] = false;
        next++;
      }

      // Update value of max length
      maxLength = Math.max(length, maxLength);
    }
    return maxLength;
  }

};

var A = [100, 4, 200, 1, 3, 2];
console.log(module.exports.longestConsecutive(A)); // expect 4

A = [6, 4, 5, 2, 3];
console.log(module.exports.longestConsecutive(A)); // expect 5