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

    var values = {
      'I' : 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    var result = 0;
    var i = 0;
    while (i < A.length) {
      var ch = A.charAt(i);
      var val = values[ch];
      // console.log('val', val);
      if (ch == 'I' || ch == 'X' || ch == 'C') {
        if (i < A.length) {
          var next = A.charAt(i+1);
          if (ch == 'I' && next == 'V' ||
              ch == 'X' && next == 'L' ||
              ch == 'C' && next == 'D' ) {
            result += (val * 4);
            i++;
          } else if (ch == 'I' && next == 'X' ||
                     ch == 'X' && next == 'C' ||
                     ch == 'C' && next == 'M' ) {
            result += (val * 9);
            i++;
          } else {
            result += val;
          }
        } else {
          result += val;
        }
      } else {
        result += val;
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