/**
 * KMP算法
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  /**
   * 构建Next数组
   *
   * @param {String} target
   * @returns {Array}
   */
  function getNextArr(target) {
    const len = target.length;
    let next = [0];
    let k = 0;

    for (let i = 1; i < len; i++) {
      while (k > 0 && target[i] !== target[k]) {
        k = next[k - 1];
      }
      if (target[i] === target[k]) {
        k++;
      }
      next[i] = k;
    }
    return next;
  }
  if (needle.length === 0) {
    return 0;
  }
  // 获取Next数组
  const next = getNextArr(needle);
  const sLen = haystack.length;
  const tLen = needle.length;
  let k = 0;
  for (let i = 0; i < sLen; i++) {
    // 不匹配的时候，移动k值
    while (k > 0 && haystack[i] !== needle[k]) {
      k = next[k - 1];
    }
    if (haystack[i] === needle[k]) {
      k++;
    }
    if (k === tLen) {
      return i - k + 1;
    }
  }
  return -1;
};

/**
 * 暴力搜索
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var traverse = function(source, target) {
  const sLen = source.length;
  const tLen = target.length;
  let i, j;
  for (i = 0; i <= sLen - tLen; i++) {
    j = 0;
    while (j < tLen && source[i + j] === target[j++]);
    if (j === tLen) {
      return i;
    }
  }
  return -1;
};

const haystack = `don't say lazy`;
const needle = `say`;

const rs = strStr(haystack, needle);
console.log(`find string at: ${rs}, result:${haystack.search(needle) === rs}`);
