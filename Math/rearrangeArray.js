/*

Rearrange a given array so that Arr[i] becomes Arr[Arr[i]] with O(1) extra space.

Lets say N = size of the array. Then, following holds true :
* All elements in the array are in the range [0, N-1]
* N * N does not overflow for a signed integer


Now, we will do a slight trick to encode 2 numbers in one index.
This trick assumes that N * N does not overflow.

1) Increase every Array element Arr[i] by (Arr[Arr[i]] % n)*n.
2) Divide every element by N.

Given a number as
 A = B + C * N if ( B, C < N ) A % N = B A / N = C

We use this fact to encode 2 numbers into each element of Arr.

*/

function rearrangeArray(A) {
  // A[i] becomes A[A[i]]

  var N = A.length;
  var i;

  // Increase every array element by (A[A[i]] % N) *N;
  for (i = 0; i < N; i++) {
    A[i] += (A[A[i]] % N) * N;
  }

  // console.log(A);

  // Now divide each element by N
  for (i = 0; i < N; i++) {
    var a = Math.floor(A[i] / N);
    A[i] = a;
  }

  console.log(A);
}

var A = [1, 0];
console.log(rearrangeArray(A)); // [0, 1]

A = [4, 0, 2, 1, 3];
console.log(rearrangeArray(A)); // [3, 4, 2, 0, 1]
/*
A[0] = A[A[0]] -> A[0] = A[4] = 3
A[1] = A[A[1]] -> A[1] = A[0] = 4
A[2] = A[A[2]] -> A[2] = A[2] = 2
A[3] = A[A[3]] -> A[3] = A[1] = 0
A[4] = A[A[4]] -> A[4] = A[3] = 1;
*/

A = [5, 6, 0, 2, 4, 1, 3];
console.log(rearrangeArray(A));