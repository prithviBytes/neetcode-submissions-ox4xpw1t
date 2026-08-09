class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let hashMap = {};
    for (let num of nums) {
        if (hashMap[num]) {
            hashMap[num]++;
        } else {
            hashMap[num] = 1;
        }
    }
    let maxFreq = Math.max(...Object.values(hashMap))
    let bucket = Array.from({ length: maxFreq + 1}, () => [])
    for (let [num, freq] of Object.entries(hashMap)) {
        bucket[freq].push(num);
    }
    let res = [];
    for (let j = maxFreq; j >= 0; j--) {
        for (let i = 0; i < bucket[j].length; i++) {
            res.push(bucket[j][i])
            if (k === res.length) {
                return res;
            }
        }
    }
    return res;
}
}
