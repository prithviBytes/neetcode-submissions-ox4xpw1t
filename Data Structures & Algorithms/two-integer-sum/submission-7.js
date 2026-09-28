class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};
        for(const [idx, num] of nums.entries()) {
            let diff = target - num;
            if(diff in hashMap) {
                return [hashMap[diff], idx];
            } else {
                hashMap[num] = idx;
            }
        }
    }
}
