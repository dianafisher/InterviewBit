/*
Given numRows, generate the first numRows of Pascal’s triangle.

Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.

Given numRows = 5,

[
     [1],
     [1,1],
     [1,2,1],
     [1,3,3,1],
     [1,4,6,4,1]
]

*/

function pascalsTriangle(numRows) {
  var numCols;
  if (numRows == 1) {
    numCols = 1;
  }
  numCols = numRows + 1;

  var result = [];
  for (var r = 0; r < numRows; r++) {
    // console.log('r', r);
    var sub = [];
    for (var c = 0; c < r+1; c++) {
      var val = pascalHelper(r, c);
      // console.log(val);
      sub.push(val);
    }
    result.push(sub);
  }

  return result;
}

function pascalHelper(r, c) {
  if (r == 0) {
    return 1;
  }
  if (r == 1) {
    return 1;
  }
  if (c == 0) {
    return 1;
  }
  if (c == r) {
    return 1;
  }

  return pascalHelper(r-1, c) + pascalHelper(r-1, c-1)
}

var r = pascalsTriangle(4);
console.log(r);

var r = pascalsTriangle(1);
console.log(r);

var r = pascalsTriangle(10);
console.log(r);