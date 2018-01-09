/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function isMirror(t1, t2) {
    // 同时为null
    if (t1 === null && t2 === null) {
      return true;
    }
    // 其中一个为null
    if (t1 === null || t2 === null) {
      return false;
    }
    // 值相等, 递归分别比较左右子树
    return (
      t1.val === t2.val &&
      isMirror(t1.right, t2.left) &&
      isMirror(t1.left, t2.right)
    );
  }
  return root === null || isMirror(root.left, root.right);
};
