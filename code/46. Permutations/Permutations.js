/**
 * 排列 [元素不重复]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  const totalLen = nums.length;

  function backtrack(arr) {
    if (arr.length === totalLen) {
      result.push(Array.from(arr));
    } else {
      for (let i = 0; i < totalLen; i++) {
        if (!arr.includes(nums[i])) {
          arr.push(nums[i]);
          backtrack(arr);
          arr.pop();
        }
      }
    }
  }
  backtrack([]);
  return result;
};

/**
 * 排列 [元素可重复]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const totalLen = nums.length;
  nums.sort();
  let result = [];
  let used = new Array(totalLen).fill(false);

  function backtrack(arr) {
    if (arr.length === totalLen) {
      result.push(Array.from(arr));
    } else {
      for (let i = 0; i < totalLen; i++) {
        if (used[i] || i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
          continue;
        }
        used[i] = true;
        arr.push(nums[i]);
        backtrack(arr);
        used[i] = false;
        arr.pop();
      }
    }
  }
  backtrack([]);
  return result;
};

console.log(permute([1, 2, 3, 4, 5, 6, 8, 9]).length);
console.log(permuteUnique([1, 5, 6, 5, 9, 9, 9]).length);
