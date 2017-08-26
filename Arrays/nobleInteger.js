/*
Given an integer array, find if an integer p exists in the array such
that the number of integers greater than p in the array equals to p

If such an integer is found return 1 else return -1.

*/

function nobleInteger(A) {

  // var table = {};
  // // O(n)
  // for (var i = 0; i < A.length; i++) {
  //   var v = A[i];

  //   if (table[v]) {
  //     var count = table[v];
  //     count++;
  //     table[v] = count;
  //   } else {
  //     table[v] = 1;
  //   }
  // }

  // var keys = Object.keys(table);

  // console.log(table);
  // console.log(keys);

  // sort array -> O(n log(n))
  A.sort(function(a, b) {
    return a - b;
  });

  // for (var i = 0; i < A.length; i++) {
  //   console.log(A[i]);
  // }

  var count = A.length;

  for (var i = 0; i < A.length; i++) {
    var k = A[i];
    var rem = count - (i + 1);
    // console.log('k', k);
    // console.log('rem', rem);
    if (rem === k) {
      // make sure the remaining values are not equal to k
      if (A[i+1] !== k) {
        return 1;
      }
    }
  }

  return -1;

}

var a = [9, 2, 3, 4, 5, 6, 7, 8, 1, 11, 3];
console.log(nobleInteger(a));

a = [20, 11, 4, 12, 67];
console.log(nobleInteger(a));

a = [1, 2, 3];
console.log(nobleInteger(a));

a = [ 1, 2, 7, 0, 9, 3, 6, 0, 6 ];
console.log(nobleInteger(a));

a = [ -4, 7, 5, 3, 5, -4, 2, -1, -9, -8, -3, 0, 9, -7, -4, -10, -4, 2, 6, 1, -2, -3, -1, -8, 0, -8, -7, -3, 5, -1, -8, -8, 8, -1, -3, 3, 6, 1, -8, -1, 3, -9, 9, -6, 7, 8, -6, 5, 0, 3, -4, 1, -10, 6, 3, -8, 0, 6, -9, -5, -5, -6, -3, 6, -5, -4, -1, 3, 7, -6, 5, -8, -5, 4, -3, 4, -6, -7, 0, -3, -2, 6, 8, -2, -6, -7, 1, 4, 9, 2, -10, 6, -2, 9, 2, -4, -4, 4, 9, 5, 0, 4, 8, -3, -9, 7, -8, 7, 2, 2, 6, -9, -10, -4, -9, -5, -1, -6, 9, -10, -1, 1, 7, 7, 1, -9, 5, -1, -3, -3, 6, 7, 3, -4, -5, -4, -7, 9, -6, -2, 1, 2, -1, -7, 9, 0, -2, -2, 5, -10, -1, 6, -7, 8, -5, -4, 1, -9, 5, 9, -2, -6, -2, -9, 0, 3, -10, 4, -6, -6, 4, -3, 6, -7, 1, -3, -5, 9, 6, 2, 1, 7, -2, 5 ];
console.log(nobleInteger(a));