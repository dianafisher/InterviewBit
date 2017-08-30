/*

Given 2 non negative integers m and n, find gcd(m, n)

GCD of 2 integers m and n is defined as the greatest integer g such that g is a divisor of both m and n.
Both m and n fit in a 32 bit signed integer.

Lets say g is gcd(m, n) and m > n.

m = g * m1
n = g * m2

m - n = g * (m1 - m2)

gcd (m, n) = gcd(m-n, n)

*/

function gcd(A, B) {
  if (B == 0) return A;

  return gcd(B, A%B);
}

function nonRecursiveGCD(A, B) {
  while (B != 0) {
    var temp = B;
    B = A % temp;
    A = temp;
  }
  return A;
}

var A = 6;
var B = 9;

console.log(gcd(A, B)); // 3
console.log(nonRecursiveGCD(A, B)); // 3