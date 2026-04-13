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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inOrderIdxMap = new Map();
        inorder.forEach((val, idx) => inOrderIdxMap.set(val, idx));
        let preOrderIdx = 0;
        function helper(left, right){
            if(left > right) return null;
            const rootVal = preorder[preOrderIdx++];
            const rootNode = new TreeNode(rootVal);
            let mid = inOrderIdxMap.get(rootVal);
            rootNode.left = helper(left, mid - 1);
            rootNode.right = helper(mid+1, right)
            return rootNode;
        }
        return helper(0, preorder.length - 1);
    }
}
