/* palindromeString.js

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example:

"A man, a plan, a canal: Panama" is a palindrome.

"race a car" is not a palindrome.

Return 0 / 1 ( 0 for false, 1 for true ) for this problem

*/

module.exports = {
  //param A : string
  //return an integer
  isPalindrome : function(A){

    A = A.toLowerCase();
    var n = A.length;
    var mid = Math.floor(n/2);

    var i = 0;
    var j = n-i-1;
    while(i <= j) {

      var ch1 = A[i];
      var ch2 = A[j];

      if (!this.isAlphanumericCharacter(ch1)) {
        var idx = i;
        while (!this.isAlphanumericCharacter(ch1)) {
          ch1 = A[idx++];
        }
        i = idx-1;
      }

      if (!this.isAlphanumericCharacter(ch2)) {
        var idx = j;
        while (!this.isAlphanumericCharacter(ch2)) {
          ch2 = A[idx--];
        }
        j = idx+1;
      }


      // console.log(`i: ${i}, j: ${j}`);
      // console.log(`ch1: ${ch1}, ch2: ${ch2}`);

      if (ch1 != ch2) {
        // console.log(`${ch1} != ${ch2}`);
        return false;
      }
      i++;
      j--;
    }

    return true;

  },

  isAlphanumericCharacter: function(ch) {
    var code = new String(ch).charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
  }

};

var A = "A man, a plan, a canal: Panama";
console.log(module.exports.isPalindrome(A));  // expect true

A = "race a car";
console.log(module.exports.isPalindrome(A));   // expect false