class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = Array.from({length: nums.length}, () => 1);
        let suffix = new Array(nums.length).fill(1); 
        let result = [];

        for(let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1]; 
        }
        for(let j = nums.length -2; j >= 0; j--){
            suffix[j] = nums[j + 1] * suffix[j + 1];
        }

        for(let i = 0; i < nums.length; i ++) {
            result[i] = prefix[i] * suffix[i]
        }
        return result
    }
}
