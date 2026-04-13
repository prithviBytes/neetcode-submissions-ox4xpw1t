class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    if(nums[left] <= nums[right]) return nums[left];
    while(left < right) {
        let mid = Math.floor((left + right) / 2)
        console.log(left, right, mid)
        if (nums[right] > nums[mid]) {
            right = mid;
        } else {
            left = mid + 1
        }
    }
    return nums[left]
}
}