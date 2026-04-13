class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroes = 0
        let totalProduct = 1;
        for(let num of nums) {
            if(num === 0) {
                zeroes += 1
            } else {
                totalProduct *= num
            }
        }
        let result = Array(nums.length).fill(0)
        for(let i = 0; i < nums.length; i++){
            if(zeroes > 1) {
                return result
            } else if(zeroes === 1) {
                result[i] = nums[i] === 0 ? totalProduct : 0;
            } else {
                result[i] = totalProduct / nums[i]
            }
        }
        return result
    }
}
