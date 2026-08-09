class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hash = new Set(nums);
        let max = 0;
        for (let num of nums) {
            if (hash.has(num - 1)) {
                continue;
            }
            let i = 1;
            let currMax = 0;
            while (true) {
                if (hash.has(num + i)) {
                    i++;
                } else {
                    break;
                }
            }
            max = Math.max(max, i);
        }
        return max;
    }
}
