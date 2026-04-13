/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
       let  max = 0;
        function dfs(node, currentDepth) {
            if(node === null) return
            currentDepth += 1
            max = Math.max(currentDepth, max);
            dfs(node.left, currentDepth)
            dfs(node.right, currentDepth)
        }
        dfs(root, 0);
        return max;
    }
}
