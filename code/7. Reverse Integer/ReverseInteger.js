/**
 * 正则的方式, 效率好像有点低了
 *
 * @param {number} x
 * @return {number}
 */
var reverseMatch = function(x) {
  const str = x < 0 ? '-' : '';
  let arr = (x + '').match(/\d/g);
  let n = +(str + arr.reverse().join(''));
  return Math.abs(n) > Math.pow(2, 31) ? 0 : n;
};

var reverse = function(x) {
  var absX = Math.abs(x);
  var result = 0;
  while (absX > 0) {
    result = result * 10 + absX % 10;
    absX = parseInt(absX / 10, 10);
  }
  result = x < 0 ? -result : result;
  return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1
    ? result
    : 0;
};

const rs = reverse(15638474);
console.log(rs);
