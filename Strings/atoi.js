/* atoi.js


Questions:
Q1. Does string contain whitespace characters before the number?
A. Yes

Q2. Can the string have garbage characters after the number?
A. Yes. Ignore it.

Q3. If no numeric character is found before encountering garbage characters, what should I do?
A. Return 0.

Q4. What if the integer overflows?
A. Return INT_MAX if the number is positive, INT_MIN otherwise.

Input : "9 2704"
Output : 9

*/

module.exports = {
  //param A : string
  //return an integer
  atoi : function(A){
    if (A.length == 0) return 0;

    var index = 0;
    var n = 0;
    var sign = 1;
    var maxDivTen = Math.floor(Number.MAX_SAFE_INTEGER / 10);


    // ignore leading whitespace
    while (A.charAt(index) === ' ') {
      index++;
    }

    // check for +/-
    var ch = A.charAt(index);
    // console.log('ch', ch);
    if (ch == '-') {
      sign = -1;
      index++;
    } else if (ch == '+') {
      sign = 1;
      index++;
    }

    while (index < A.length) {
      ch = A.charAt(index);
      // check if ch is a digit.
      var value = new String(ch).charCodeAt(0) - "0".charCodeAt(0);
      if (value >= 0 && value <= 9) {
        if (n > maxDivTen || n == maxDivTen && value > 7) {
          if (sign > 0) return Number.MAX_SAFE_INTEGER;
          else return Number.MIN_SAFE_INTEGER;
        } else {
          n = n * 10 + value;
        }
      } else {
        // invalid character, break
        break;
      }
      index++;
    }
    return sign * n;
  }
};

console.log(module.exports.atoi("9 2704"));  // expect 9
console.log(module.exports.atoi("2704"));  // expect 2704
console.log(module.exports.atoi("-2704"));  // expect -2704
console.log(module.exports.atoi(" 2704"));  // expect 2704
console.log(module.exports.atoi(" -2 704"));  // expect -2
console.log(module.exports.atoi("abc -704"));  // expect 0
console.log(module.exports.atoi("2a704"));  // expect 2
console.log(module.exports.atoi("+7"));  // expect 7
console.log(module.exports.atoi("-54332872018247709407"));  // expect -9007199254740991
console.log(module.exports.atoi("V515V 5793K 627 23815945269 1 1249794L 631 8755 7"));  // expect 0
console.log(module.exports.atoi("- 5 88C340185Q 71 8079 834617385 2898422X5297Z6900"));  // expect 0
console.log(module.exports.atoi("5121478262 8070067M75 X199R 547 8C0A11 93I630 4P4071 029W433619 M3 5 14703818 776366059B9O43393"));  // expect 5121478262
console.log(module.exports.atoi("-5121478262 8070067M75 X199R 547 8C0A11 93I630 4P4071 029W433619 M3 5 14703818 776366059B9O43393"));  // expect -5121478262

