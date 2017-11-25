/* longestCommonPrefix.js

Write a function to find the longest common prefix string amongst an array of strings.

Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.

As an example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".

Given the array of strings, you need to find the longest S which is the prefix of ALL the strings in the array.

Example:

Given the array as:

[

  "abcdefgh",

  "aefghijk",

  "abcefgh"
]
The answer would be “a”.

*/

module.exports = {
  //param A : array of strings
  //return a strings
  longestCommonPrefix : function(A){

    var count = A.length;
    var prefixes = [];
    var prefix = [];
    var shortestLength = Number.MAX_VALUE;
    for (var i = 0; i < count; i++) {
      shortestLength = Math.min(shortestLength, A[i].length);
    }
    // console.log('shortestLength', shortestLength);

    for (var i = 0; i < shortestLength; i++) {
      var ch = A[0].charAt(i);
      var match = true;
      // check to see if the other strings match
      for (var j = 1; j < count; j++) {
        if (A[j].charAt(i) != ch) {
          match = false;
          break;
        }
      }

      if (match) {
        prefix.push(ch);
        // console.log('prefix', prefix);
      } else {
        prefixes.push(prefix);
        prefix = [];
      }
    }

    // add the last prefix found..
    prefixes.push(prefix);

    // console.log(prefixes);
    // Get the longest prefix.
    var longest = prefixes[0];
    for (var i = 1; i < prefixes.length; i++) {
      if (prefixes[i].length > longest.length) {
        longest = prefixes[i];
      }
    }
    return longest.join('');
  }
};

console.log(module.exports.longestCommonPrefix(["abcdefgh", "aefghijk", "abcefgh"]));  // expect a
console.log(module.exports.longestCommonPrefix(["abcdefgh", "abcefgh"]));  // expect abc
console.log(module.exports.longestCommonPrefix(["abdefgh", "abcefgh"]));  // expect efgh
console.log(module.exports.longestCommonPrefix(["abdefghjkl", "abcefghzdne"]));  // expect efgh