module.exports = {

  binarySearch : function(A, n, x) {
    var low = 0, high = n-1;

    while (low <= high) {
      var mid = Math.floor((low + high)/2);

      if (x == A[mid]) return mid;

      else if (x < A[mid]) {
        high = mid-1;
      } else {
        low = mid + 1;
      }
    }

    return -1;

  }
}

let A = [2, 4, 5, 7, 13, 14, 15, 23]
let index = module.exports.binarySearch(A, A.length, 23)
console.log(`index = ${index}`)