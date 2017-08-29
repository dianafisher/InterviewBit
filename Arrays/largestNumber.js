/*

Given a list of non negative integers, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.

*/

function largestNumber(A) {

  if (A.length == 0) return 0;

  // check for all zeroes
  var allZero = true;

  var strings = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] != 0) {
      allZero = false;
    }
    strings.push(A[i].toString());
  }

  if (allZero) return 0;

  // console.log(strings);

  strings.sort(function(a, b) {
    if (a.length == b.length) {
      return parseInt(b) - parseInt(a);
    } else {
      var strA = a+b;
      var strB = b+a;
      return parseInt(strB) - parseInt(strA);
    }
    return b[0] - a[0];
  });

  // console.log(strings);

  var result = strings.join('');
  return result;
}

var A = [3, 30, 34, 5, 9];
console.log(largestNumber(A)); // 9534330

A = [2, 30, 34, 5, 9];
console.log(largestNumber(A));  // 9534230, 9534302

A = [0,1,0,0];
console.log(largestNumber(A)); // 1000

A = [0,1,0,0,10];
console.log(largestNumber(A)); // 11000

A = [1, 2, 3, 4, 5, 10];
console.log(largestNumber(A)); //

A = [30,1,0,0,10];
console.log(largestNumber(A)); // 1301000, 3001000, 3011000

A = [0, 0, 0, 0, 0];
console.log(largestNumber(A));
