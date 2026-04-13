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
     * @return {TreeNode}
     */
    invertTree(root) {
            function dfs_invert(node) {
        if(node === null) return;
        [node.left, node.right] = [node.right, node.left];
        dfs_invert(node.left)
        dfs_invert(node.right)
    }
    dfs_invert(root)
    return root;
    }
}
