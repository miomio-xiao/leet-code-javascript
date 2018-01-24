/**
 * 借用三路快排的思想, 遇到0交换到左边，遇到2交换到右边，1的时候移动i
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;
  while (i <= r) {
    if (nums[i] === 0) {
      [nums[i++], nums[l++]] = [nums[l], nums[i]];
    } else if (nums[i] === 2) {
      [nums[i], nums[r--]] = [nums[r], nums[i]];
    } else {
      i++;
    }
  }
};
