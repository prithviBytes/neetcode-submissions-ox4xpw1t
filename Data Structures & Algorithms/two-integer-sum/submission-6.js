class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};
        for(let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if(nums[i] in hash) {
                return [hash[nums[i]], i]
            } else {
                hash[diff] = i;
            }
        }
        return false;
    }
}
