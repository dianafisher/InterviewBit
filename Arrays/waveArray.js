/*

Given an array of integers, sort the array into a wave like array and return it,
In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....

Given [1, 2, 3, 4]

One possible answer : [2, 1, 4, 3]
Another possible answer : [4, 1, 3, 2]

Return the answer which is lexicographically smallest: [2, 1, 4, 3]

*/

function waveArray(A) {

  if (A.length == 1) {
    return A;
  }

  // sort array -> O(n log(n))
  A.sort(function(a, b) {
    return a - b;
  });

  // alternate greater than and less than.
  var n = A.length;
  for (var i = 0; i < n-1; i+= 2) {
    // swap indices
    var temp = A[i];
    A[i] = A[i+1];
    A[i+1] = temp;

    // console.log(A);
  }

  return A;

}

var A = [1, 2, 3, 4];
console.log(waveArray(A));

A = [1];
console.log(waveArray(A));

A = [3,10];
console.log(waveArray(A));

A = [ 5, 1, 3, 2, 4 ];
console.log(waveArray(A));