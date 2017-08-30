/*

Determine whether an integer is a palindrome. Do this without extra space.

A palindrome integer is an integer x for which reverse(x) = x where reverse(x) is x with its digit reversed.
Negative numbers are not palindromic.

*/

function isPalindrome(A) {
  if (A < 0) return 0;
  if (A < 10) return 1;  // single digit is a palindrome.

  var divisor = 10;
  var B = 0;
  var a = A;
  while (A > 0) {
    var q = Math.floor(A/divisor);
    // console.log(q);
    var digit = A - q*divisor;
    // console.log(`digit: ${digit}`);
    B *= divisor;
    B += digit;

    // console.log(`B: ${B}`);
    A = q;
  }
  if (a === B) return 1;
  else return 0;
}

var A = 12121;
console.log(isPalindrome(A)); // true

A = 123;
console.log(isPalindrome(A)); // false