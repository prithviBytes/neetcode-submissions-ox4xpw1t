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
    diameterOfBinaryTree(root) {
        let max = 0;
        function dfs(node) {
            if(node === null) return 0;
            let leftHeight = dfs(node.left);
            let rightHeight = dfs(node.right);
            let currentHeight = leftHeight + rightHeight;
            max = Math.max(currentHeight, max);
            return Math.max(leftHeight, rightHeight) + 1;
        }
        dfs(root);
        return max;
    }
}
