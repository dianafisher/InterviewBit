/*
Find out the maximum sub-array of non negative numbers from an array.
The sub-array should be continuous. That is, a sub-array created by choosing
the second and fourth element and skipping the third element is invalid.

Maximum sub-array is defined in terms of the sum of the elements in the sub-array.
Sub-array A is greater than sub-array B if sum(A) > sum(B).

A : [1, 2, 5, -7, 2, 3]
The two sub-arrays are [1, 2, 5] [2, 3].
The answer is [1, 2, 5] as its sum is larger than [2, 3]

NOTE: If there is a tie, then compare with segment's length and return segment which has maximum length
NOTE 2: If there is still a tie, then return the segment with minimum starting index

*/


function maxNonNegativeSubArray(A) {
  // console.log(A);

  var sub = [];
  var max = Number.NEGATIVE_INFINITY;
  var idx = 0;
  var result = [];
  while (idx < A.length) {
    // console.log('sub', sub);
    // console.log('result', result);
    var c = A[idx];
    if (c > -1) {
      sub.push(c);
    } else {
      // sum up the current array.
      var sum = 0;
      for (var i = 0; i < sub.length; i++) {
        sum += sub[i];
      }
      // console.log(sub, sum, max);
      if (sum > max) {
        // console.log('sum > max');
        max = sum;
        // create result array from current sub array
        result = Array.from(sub);

      } else if (sum == max) {
        // console.log('sum = max');
        if (result.length == 0) {
          // create result array from current sub array
          result = Array.from(sub);
        } else {
           // use the longest array
          if (sub.length > result.length) {
            // create result array from current sub array
            result = Array.from(sub);
          } else if (sub.length < result.length) {
            // use result
            sub = Array.from(result);
          }
          else if (sub.length === result.length) {
            // console.log('same length');
            // use the one with the minimum starting index which will be result
            sub = Array.from(result);
          }
        }
      }
      // create a new sub array.
      sub = [];
    }
    idx++;
  }

  // sum up the current array.
  var sum = 0;
  for (var i = 0; i < sub.length; i++) {
    sum += sub[i];
  }
  // console.log(sub, sum);
  if (sum > max) {
    max = sum;
    result = Array.from(sub);
  }
  // console.log('returning', result);
  return result;
}

var array = [1, 2, 5, -7, 2, 3];

console.log(maxNonNegativeSubArray(array)); // [1, 2, 5]

array = [2,2,2,2,-4,1,1,1,1,-3,5,5,5,5];
console.log(maxNonNegativeSubArray(array));

array = [6,6,6,6,6,-4,10,10,10,-3,2,2];
console.log(maxNonNegativeSubArray(array));

array = [ 0, 0, -1, 0 ]
console.log(maxNonNegativeSubArray(array));
