class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {};
        for(let num of nums) {
            if(num in hash) {
                return true;
            } else {
                hash[num] = true;
            }
        }
        return false;
    }
}
