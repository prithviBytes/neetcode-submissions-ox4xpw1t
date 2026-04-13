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
     * @return {boolean}
     */
    isValidBST(root) {
    let prev = -Infinity;
    let isValid = true;
    function inOrderTraversal(node) {
        if(!node) return;
        if(node.left) inOrderTraversal(node.left);
        if(node.val <= prev) {
            isValid = false;
        } else {
            prev = node.val;
        }
        inOrderTraversal(node.right);
    }
    inOrderTraversal(root);
    return isValid
    }
}
