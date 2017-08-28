
/*

Given a column title as appears in an Excel sheet, return its corresponding column number.

*/

function excelColumnNumber(A) {

  // 1 through 26 represent A through Z
  function range(start, stop) {
    var result = [];
    for (var idx = start.charCodeAt(0), end=stop.charCodeAt(0); idx <= end; idx++) {
      result.push(String.fromCharCode(idx));
    }
    return result;
  }

  var letters = range('A', 'Z');
  // console.log(letters);
  var len = A.length;


  var value = 0;
  var power = 0;
  for (var i = len-1; i > -1; i--) {
    var ch = A[i];
    var val = 1 + letters.indexOf(ch);
    // console.log(ch, val);
    var sum = val * Math.pow(26, power);
    // console.log('adding ' + sum);
    value += sum;
    power++;
  }

  return value;
}

console.log(excelColumnNumber('A'));    // 1 (first loop of A-Z)
console.log(excelColumnNumber('B'));    // 2
console.log(excelColumnNumber('C'));    // 3
console.log(excelColumnNumber('N'));    // 14
console.log(excelColumnNumber('P'));    // 16
console.log(excelColumnNumber('S'));    // 19
console.log(excelColumnNumber('U'));    // 21
console.log(excelColumnNumber('Z'));    // 26
console.log(excelColumnNumber('AA'));   // 27  = 26 + 1 (second loop of A-Z)
console.log(excelColumnNumber('AB'));   // 28  = 26 + 2
console.log(excelColumnNumber('AC'));   // 29  = 26 + 3
console.log(excelColumnNumber('AZ'));   // 52  = 26 + 26
console.log(excelColumnNumber('BA'));   // 53  = (2*26^1) + (1 * 26^0) = 53
console.log(excelColumnNumber('SZ'));   // 520 = (19 * 26^1 = 494) + (26 * 26^0)
console.log(excelColumnNumber('CUZ'));  // 2600 = (3*26^2) + (21*26^1) + (26*(26^0))  = 2028 + 546 + 26
console.log(excelColumnNumber('NTP'));  // 10000 = (14*26^2) + (20*26^1) + (16*26^0) = 9264 + 520 + 16 =
