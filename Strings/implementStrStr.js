/* implementStrStr.js

Implement strStr().

strstr - locate a substring ( needle ) in a string ( haystack ).

What should be the return value if the needle is empty?
What if both haystack and needle are empty?
For the purpose of this problem, assume that the return value should be -1 in both cases.

*/

module.exports = {
  //param A : string
  //param B : string
  //return an integer
  strStr : function(A, B){
    // A is 'haystack', B is 'needle'
    if (A.length == 0) return -1;
    if (A.length == 0 && B.length == 0) return -1;

    if (A.length < B.length) return -1;
    var a = 0;
    var b = 0;
    var index = -1;
    // for (var a = 0; a < A.length; a++) {
    while (a < A.length) {
      // console.log(`b: ${b}, ${B.charAt(b)}, a: ${a}, ${A.charAt(a)}`);
      if (A.charAt(a) == B.charAt(b)) {
        if (b == 0) {
          index = a;
          // console.log('index', index);
        }
        if (b < B.length-1) {
          b++;
        } else {
          // console.log('found all of', B);
          return index;
        }
      } else {
        if (index > -1) {
          a = index;
        }
        b = 0;
        index = -1;
      }
      a++;
    }

    return -1;
  }
};

console.log(module.exports.strStr("haystack", "needle")); // expect -1
console.log(module.exports.strStr("", ""));  // expect -1
console.log(module.exports.strStr("b", "baba"));  // expect -1
console.log(module.exports.strStr("johnny appleseed", "apple"));  // expect 7
console.log(module.exports.strStr("bbbbbbbbab", "baba"));  // expect -1
console.log(module.exports.strStr("babbbbabbbab", "baba"));  // expect - 1
console.log(module.exports.strStr("babbbbababbab", "baba"));  // expect 5
console.log(module.exports.strStr("bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba", "babaaa"));  // expect 48