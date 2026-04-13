class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashMap = new Set(nums);
        let maxSeq = 0;
        for(let num of  nums) {
            if(hashMap.has(num - 1)){
                continue;
            } else {
                let i = 1;
                let currentMax = 1;
                while(true) {
                    if(hashMap.has(num + i)) {
                        currentMax++;
                        i++
                    } else {
                        break;
                    }
                }
            if(currentMax > maxSeq) {
                maxSeq = currentMax;
            }
            }
        }
        return maxSeq
    }
}
