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
            function dfs(node, currDepth) {
        if(node === null) return currDepth
        let left = dfs(node.left, currDepth + 1)
        let right = dfs(node.right, currDepth + 1);
        return Math.max(left, right)
    }
    let max = dfs(root, 0)
    return max;
    }
}
