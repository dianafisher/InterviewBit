/*

Given a positive integer which fits in a 32 bit signed integer, find if it
can be expressed as A^P where P > 1 and A > 0. A and P both should be integers.

*/

function powerOfTwoIntegers(A) {
  // n^P  where P > 1 and n > 0

  var s = Math.sqrt(A);
  // console.log(s);
  for (var i = 2; i <= s; i++) {
    var j = 2;  // start exponent at 2..
    var p = Math.pow(i, j);

    while (p <= A && p > 0) {
      if (p == A) return true;

      j++;    // increase exponent..
      p = Math.pow(i, j);
    }
  }
  return false;
}

var A = 4;
console.log(powerOfTwoIntegers(A));  // true since 2^2 = 4
console.log(powerOfTwoIntegers(2));  // false
console.log(powerOfTwoIntegers(3));  // false
console.log(powerOfTwoIntegers(9));  // false