/**
 * nTimes takes an integer and a function, and returns a function that will invoke the
 * original function the first n times the new function is invoked. The nth + 1 invocation
 * (and all subsequent invocation) of the new function will return the result of
 * the last func invocation. The new function should invoke func with any arguments
 * passed to the new function.
 *
 * HINT: n-times is the generalized version of once - for example,
 * passing 1 into n-times is the equivalent of the once function.
 *
 * var add = function(a, b) {
 *   return a + b;
 * }
 *
 * var add3Times = nTimes(3, add);
 * add3Times(1, 5) // returns 6
 * add3Times(4, 9) // returns 13
 * add3Times(6, 5) // returns 11
 * add3Times(2, 3) // returns 11
 * add3Times(9, 8) // returns 11
 *
 */

var nTimes = function(n, func) {
  // Your code here.
  var lastResult;
  var times = 0;
  return function() {
    times++;
    if (times <= arguments.length) {
      lastResult = func.apply(this, arguments);
      return lastResult;
    } else {
      return lastResult;
    }

  }
};

var add = function(a, b, c) {
   return a + b + c;
};
var add3Times = nTimes(3, add);
console.log(add3Times(1, 5, 0)); // returns 6
console.log(add3Times(4, 9, 0)); // returns 13
console.log(add3Times(6, 5, 0)); // returns 11
console.log(add3Times(2, 3, 0)); // returns 11
console.log(add3Times(9, 8, 0)); // returns 11

