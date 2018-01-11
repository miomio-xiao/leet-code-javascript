/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  return n > 0 ? pow(x, n) : 1 / pow(x, -n);
};

var pow = function(x, n) {
  if (n < 2) {
    return x;
  }
  return pow(x * x, ~~(n / 2)) * (n % 2 ? x : 1);
};

const x = 34.00515;
const n = -3;
console.log(myPow(x, n) === Math.pow(x, n));
