class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let deQueue = []
        let res = []
        for(let i = 0 ; i < nums.length; i++){
            if(deQueue.length && deQueue[0] < i - k + 1) {
                deQueue.shift()
            }

            while(deQueue.length && nums[deQueue[deQueue.length - 1]] <= nums[i]) {
                deQueue.pop();
            }

            deQueue.push(i);
            if(i >= k - 1) {
                res.push(nums[deQueue[0]])
            }
        }
        return res;
    }
}
