/*
Given a non-negative number represented as an array of digits,

add 1 to the number ( increment the number represented by the digits ).

The digits are stored such that the most significant digit is at the head of the list.

Example:

If the vector has [1, 2, 3]

the returned vector should be [1, 2, 4]

as 123 + 1 = 124.

*/

function plusOne(A) {
  var n = A.length;
  var carry = 0;
  var result = [];

  // add one to the last digit in the array.
  var digit = A[n-1];
  var sum = digit + 1;
  var carry = 0;

  if (sum >= 10) {
    var temp = sum.toString();
    // console.log(temp);
    carry = parseInt(temp[0], 10);
    var d = parseInt(temp[1], 10);
    // console.log(carry, d);
    result.push(d);
  } else {
    result.push(sum);
  }

  // now add the rest of the digits in the array.
  for (var i = n-2; i > -1; i--) {
    var digit = A[i];
    // console.log('digit', digit);
    if (carry > 0) {
      digit += carry;
      carry = 0;
    }
    if (digit >= 10) {
      var temp = sum.toString();
      // console.log(temp);
      carry = parseInt(temp[0], 10);
      var d = parseInt(temp[1], 10);
      // console.log(carry, d);
      result.push(d);
    }
    else {
      result.push(digit);
    }
  }

  // console.log('carry', carry);
  if (carry > 0) {
    result.push(carry);
  }

  result = result.reverse();

  // remove leading zeros

  var n = result[0];
  while( n == 0 ) {
    result = result.slice(1, result.length);
    n = result[0];
  }

  return result;
}

var A = [1, 2, 3];
console.log(plusOne(A));  // [1, 2, 4]

A = [0, 1, 2, 3];
console.log(plusOne(A));  // [1, 2, 4]

A = [9, 9, 9];
console.log(plusOne(A));  // [1, 0, 0, 0]

A = [7, 8, 9];
console.log(plusOne(A));  // [7, 9, 0]