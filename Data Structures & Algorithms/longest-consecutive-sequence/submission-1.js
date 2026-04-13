class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashMap = new Set(nums)
    let maxSquence = 0;
    for(let num of nums) {
        if(hashMap.has(nums - 1)){
            continue
        } else {
            let i = 1
            let currentMax = 1;
            while(true){
                if(hashMap.has(num + i)) {
                    currentMax += 1;
                    i++;
                } else {
                    break;
                }
            }
            if(maxSquence < currentMax) {
                maxSquence = currentMax;
            }
        }
    }
    return maxSquence
    }
}
