/*

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

*/

function convertToTitle(A) {

  if (A <= 0) return '';

  var result = [];

  while (A > 0) {
    console.log('A:', A);
    A--;  // to get to zero indexing
    var val = A % 26;
    // console.log('val', val);
    var start = 'A'.charCodeAt(0);
    var ch = String.fromCharCode(val + start);
    // console.log('ch', ch);
    result.push(ch);
    A = Math.floor(A/26);
  }


  var str = result.reverse().join('');

  return str;

}


console.log(convertToTitle(1)); // A = (1 + 26^0)
console.log(convertToTitle(2)); // B
console.log(convertToTitle(3)); // C
console.log(convertToTitle(26)); // Z  = (26 + 26^0)
console.log(convertToTitle(27)); // AA = (1 + 26 ^1)
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(52)); // AZ  = (1 * 26 ^1) + (26 * 26^0) = 26 + 26
console.log(convertToTitle(53)); // BA  = (2*26^1) + (1 * 26^0) = 53
console.log(convertToTitle(55)); // BC  = (2*26^1) + (3 * 26^0) = 55
console.log(convertToTitle(520)); // SZ = (19 * 26^1 = 494) + (26 * 26^0)
console.log(convertToTitle(2600)); // CUZ = (3*26^2) + (21*26^1) + (26*(26^0))  = 2028 + 546 + 26
console.log(convertToTitle(10000)); // NTP = (14*26^2) + (20*26^1) + (16*26^0) = 9464 + 520 + 16
