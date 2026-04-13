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
    goodNodes(root) {
            let goodNodeCount = 0;
    function dfs(node, max) {
        if(!node) return;
        if(node.val >= max) goodNodeCount++;
        max = Math.max(node.val, max);
        if(node.left) dfs(node.left, max);
        if(node.right) dfs(node.right, max);
    }
    dfs(root, root.val)
    return goodNodeCount;
    }
}
