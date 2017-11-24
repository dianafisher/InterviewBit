/* romanToInteger.js

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

Symbol Values:
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

Input : "XIV"
Return : 14

Input : "XX"
Output : 20

*/

module.exports = {
  //param A : string
  //return an integer
  romanToInt : function(A){
    var result = 0;

    var i = 0;
    while (i < A.length) {
      var ch = A.charAt(i);


      if (ch == 'I') {
        // check for subtractive notation
        if (i < A.length) {
          var next = A.charAt(i+1);
          if (next == 'V') {
            result += 4;
            i++;
          } else if (next == 'X') {
            result += 9;
            i++;
          }
          else {
            result += 1;
          }
        } else {
          result += 1;
        }
      } else if (ch == 'V') {
        result += 5;
      } else if (ch == 'X') {
        if (i < A.length) {
          var next = A.charAt(i+1);
          if (next == 'L') {
            result += 40;
            i++;
          } else if (next == 'C') {
            result += 90;
            i++;
          } else {
            result += 10;
          }
        } else {
          result += 10;
        }

      } else if (ch == 'L') {
        result += 50
      } else if (ch == 'C') {
        if (i < A.length) {
          var next = A.charAt(i+1);
          if (next == 'D') {
            result += 400;
            i++;
          } else if (next == 'M') {
            result += 900;
            i++;
          } else {
            result += 100;
          }
        } else {
          result += 100;
        }
      } else if (ch == 'D') {
        result += 500
      } else if (ch == 'M') {
          result += 1000;
      }
      i++;

    }

    return result;
  }
};

console.log(module.exports.romanToInt("XIV"));  // expect 14
console.log(module.exports.romanToInt("XX"));  // expect 20
console.log(module.exports.romanToInt("II"));  // expect 2
console.log(module.exports.romanToInt("IX"));  // expect 9
console.log(module.exports.romanToInt("VIII"));  // expect 8
console.log(module.exports.romanToInt("IV"));  // expect 4
console.log(module.exports.romanToInt("MMMCMXCIX"));  // expect 3999
console.log(module.exports.romanToInt("C"));  // expect 100
console.log(module.exports.romanToInt("CD"));  // expect 400
console.log(module.exports.romanToInt("M"));  // expect 1000
console.log(module.exports.romanToInt("CM"));  // expect 900
console.log(module.exports.romanToInt("XC"));  // expect 90