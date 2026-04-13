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
        let currIndex = 0;
        let result = null;
        function inOrderTraversal(node) {
            if(!node || result !== null) return;
            inOrderTraversal(node.left);
            currIndex += 1;
            if(currIndex === k){
                result = node;
                return;
            }
            inOrderTraversal(node.right);
        }
        inOrderTraversal(root);
        return result.val;
    }
}
