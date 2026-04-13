class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashmap = {}
        for(let i = 0; i < nums.length; i++) {
            let difference = target - nums[i]
            if(difference in hashmap) {
                return [hashmap[difference], i]
            } else {
                hashmap[nums[i]] = i
            }
        }
    }
}
