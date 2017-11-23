/* lengthOfLastWord.js


Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Given s = "Hello World",

return 5 as length("World") = 5.

Please make sure you try to solve this problem without using library functions.
Make sure you only traverse the string once.

*/

module.exports = {
  //param A : string
  //return an integer
  lengthOfLastWord : function(A){
    var count = 0;
    var foundChar = false;
    for (var i = A.length-1; i > -1; i--) {
      if (A.charAt(i) != ' ') {
        foundChar = true
        count++;
      } else {
        if (foundChar) {
          break;
        } else {
          // just keep going until a character has been found.
        }
      }
    }
    return count;
  }
};

console.log(module.exports.lengthOfLastWord("Hello World"));  // expect 5
console.log(module.exports.lengthOfLastWord("Hello World "));  // expect 5
console.log(module.exports.lengthOfLastWord(" "));  // expect 0
console.log(module.exports.lengthOfLastWord(" 1   "));  // expect 1