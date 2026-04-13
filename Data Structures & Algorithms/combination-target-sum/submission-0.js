class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        function backtracking(start, current, sum) {
            if(target === sum){
                result.push([...current]);
            }
            if (sum > target) return;
            for(let i = start; i < nums.length; i++) {
                current.push(nums[i]);
                backtracking(i, current, sum + nums[i])
                current.pop();
            }
        }
        backtracking(0, [], 0)
        return result;
    }
}
