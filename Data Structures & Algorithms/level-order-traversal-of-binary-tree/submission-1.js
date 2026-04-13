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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) return [];
        let queue = [root];
        let output = [];
        while(queue.length !== 0) {
            let currentLevel = queue.length;
            let currentLevelValues = [];
            for(let i = 0; i < currentLevel; i++) {
                let currentNode = queue.shift();
                currentLevelValues.push(currentNode.val);
                if(currentNode.left) queue.push(currentNode.left);
                if(currentNode.right) queue.push(currentNode.right);
            }
            output.push(currentLevelValues);
        }
        return output;
    }
}
