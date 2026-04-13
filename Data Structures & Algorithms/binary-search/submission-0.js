class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2)
    while(nums[mid] !== target && left <= right) {
        console.log(mid, left, right, nums[mid])
        if(nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2)
    }
    return nums[mid] === target ? mid : -1;
    }
}
