/**
 * 两重循环, 类似冒泡的原理
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  return [];
};

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    // 查找差值有没有在Map里出现过
    if ((index = map.get(target - nums[i])) != null) {
      return [index, i];
    }
    map.set(nums[i], i);
  }
  return [];
};

var rs = twoSum([2, 7, 11, 15], 9);
console.log(rs);
