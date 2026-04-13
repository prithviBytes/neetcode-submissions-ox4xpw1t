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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let counter = 0;
        let result = null;
        function inOrderTraversal(node) {
            if(!node || result !== null) return;
            if(node.left) inOrderTraversal(node.left);
            counter++;
            if(counter === k) {
                result = node.val;
            }
            if(node.right) inOrderTraversal(node.right);
        }
        inOrderTraversal(root)
        return result;
    }
}
