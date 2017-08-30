/*

Given an m x n matrix of 0s and 1s, if an element is 0, set its entire row and column to 0.

*/

function setMatrixZeros(A) {

  if (A.length == 0) return A;

  var m = A.length;
  var n = A[0].length;

  var rows = [];
  var cols = [];

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (A[i][j] == 0) {
        // console.log(`found zero at ${i},${j}`);
        rows.push(i);
        cols.push(j);
      }
    }
  }

  // loop through again and zero out the row/column

  for (var r = 0; r < rows.length; r++) {
    var row = rows[r];
    // console.log('zero out row', row);
    for (var j = 0; j < n; j++) {
      A[row][j] = 0;
    }
  }

  // console.log(A);

  for (var c = 0; c < cols.length; c++) {
    var col = cols[c];
    // console.log('zero out col', col);
    for (var i = 0; i < m; i++) {
      A[i][col] = 0;
    }
  }

  return A;
}

var A = [[1, 0, 1], [1, 1, 1], [1, 1, 1]];
console.log(setMatrixZeros(A));   // [[0, 0, 0], [1, 0, 1], [1, 0, 1]];
