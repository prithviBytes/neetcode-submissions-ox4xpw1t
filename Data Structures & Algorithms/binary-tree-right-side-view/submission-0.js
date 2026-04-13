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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let result = [];
        let queue = [root];
        while(queue.length !== 0) {
            let currentLevel = queue.length;
            let currentLevelValues = []
            for(let i = 0; i < currentLevel; i++) {
                let currentNode = queue.shift();
                if(currentNode) {
                    currentLevelValues.push(currentNode.val);
                    if(currentNode.left) queue.push(currentNode.left);
                    if(currentNode.right) queue.push(currentNode.right);
                }
            }
            result.push(currentLevelValues.pop())
        }
        return result
    }
}
