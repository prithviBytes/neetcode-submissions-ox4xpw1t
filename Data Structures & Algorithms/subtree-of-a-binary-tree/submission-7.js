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
    
isSubtree(root, subRoot) {
    function isSameTree(q, w) {
        if (q === null && w === null) return true;
        if (q === null || w === null || q.val !== w.val) return false;
        return isSameTree(q.left, w.left) && isSameTree(q.right, w.right);
    }

    if (root === null) return false;

    // FIX: Compare the two trees HERE
    if (isSameTree(root, subRoot)) return true;

    // Otherwise search left and right
    return this.isSubtree(root.left, subRoot) || 
           this.isSubtree(root.right, subRoot);
}

}
