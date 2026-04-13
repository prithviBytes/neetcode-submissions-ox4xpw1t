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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subtree) {
        function isSameTree(p, q) {
            if(p === null && q === null) return true;
            if(p === null || q === null || p.val !== q.val) return false;
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
        }
        if(root === null) return false;
        return isSameTree(root, subtree) || this.isSubtree(root.left, subtree) || this.isSubtree(root.right, subtree)
    }
}
