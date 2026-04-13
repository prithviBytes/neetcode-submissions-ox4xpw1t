class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    let sortedNums = nums.sort((a,b) => a - b)
    let result = []
    for(let i = 0; i < sortedNums.length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue; 
        let left = i + 1
        let right = sortedNums.length - 1
        while(left < right) {
            let targetSum = -1 * (sortedNums[i]);
            let currentSum = sortedNums[left] + sortedNums[right]
            if(currentSum > targetSum) {
                right--;
            } else if(currentSum < targetSum) {
                left++;
            } else {
                result.push([sortedNums[i], sortedNums[left], sortedNums[right]])
                while(left < right && sortedNums[left] === sortedNums[left + 1]) left++;
                while(left < right && sortedNums[right] === sortedNums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return result
    }
}
