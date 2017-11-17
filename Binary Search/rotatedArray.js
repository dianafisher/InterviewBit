/* rotatedArray.js

Suppose a sorted array A is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array will not contain duplicates.

*/

module.exports = {
  //param A : array of integers
  //return an integer
  findMin : function(A){
    var n = A.length
    var low = 0, high = n-1;
    while(low <= high) {
      if (A[low] <= A[high]) {
        return A[low];
      }
      var mid = Math.floor((low + high) / 2);
      var next = (mid+1) % n;
      var prev = (mid-1) % n;

      if (A[mid] <= A[next] && A[mid] <= A[prev]) {
        return A[mid];
      } else if (A[mid] <= A[high]) {
        high = mid - 1;
      } else if (A[mid] >= A[low]) {
        low = mid + 1;
      }
    }
    return -1;
  }
};

var A = [2, 3, 5, 8, 11, 12];

var m = module.exports.findMin(A);
console.log(m)

A = [4, 5, 6, 7, 0, 1, 2];

m = module.exports.findMin(A);
console.log(m)

A = [15, 22, 23, 28, 31, 38, 5, 6, 8, 10, 12];

m = module.exports.findMin(A);
console.log(m)

A = [1, 2, 3, 4, 5, 6, 7, 8 ,9];

m = module.exports.findMin(A);
console.log(m)

A = [ 40342, 40766, 41307, 42639, 42777, 46079, 47038, 47923, 48064, 48083, 49760, 49871, 51000, 51035, 53186, 53499, 53895, 59118, 60467, 60498, 60764, 65158, 65838, 65885, 65919, 66638, 66807, 66989, 67114, 68119, 68146, 68584, 69494, 70914, 72312, 72432, 74536, 77038, 77720, 78590, 78769, 78894, 80169, 81717, 81760, 82124, 82583, 82620, 82877, 83131, 84932, 85050, 85358, 89896, 90991, 91348, 91376, 92786, 93626, 93688, 94972, 95064, 96240, 96308, 96755, 97197, 97243, 98049, 98407, 98998, 99785, 350, 2563, 3075, 3161, 3519, 4176, 4371, 5885, 6054, 6495, 7218, 7734, 9235, 11899, 13070, 14002, 16258, 16309, 16461, 17338, 19141, 19526, 21256, 21507, 21945, 22753, 25029, 25524, 27311, 27609, 28217, 30854, 32721, 33184, 34190, 35040, 35753, 36144, 37342 ]
m = module.exports.findMin(A);
console.log(m)
