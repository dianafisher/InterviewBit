/*

Given a positive integer N, print all the integers from 1 to N.
But for multiples of 3 print “Fizz” instead of the number and for the
multiples of 5 print “Buzz”. Also for number which are multiple of 3
and 5, prints “FizzBuzz”.

*/

function fizzBuzz(N) {
  var result = [];
  for (var i = 1; i < N+1; i++) {
    var output = '';

    if (i % 3 == 0) {
      output += 'Fizz';
    }
    if (i % 5 == 0) {
      output += 'Buzz'

    }

    if (output.length > 0) {
      result.push(output);
    } else {
      result.push(i);
    }


  }
  return result;
}

var N = 5;
console.log(fizzBuzz(N)); // [1, 2, Fizz, 4, Buzz]

var N = 20;
console.log(fizzBuzz(N));
