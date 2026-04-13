class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = {};

        for(let num of nums) {
            hashMap[num] = (hashMap[num] || 0) + 1;
        }
        let maxFreq = Math.max(...Object.values(hashMap));

        let bucket = Array.from({length: maxFreq + 1}, () => []);
        for(let [num, freq] of Object.entries(hashMap)) {
            bucket[freq].push(num);
        }

        let res = []

        for(let j = maxFreq; j >= 0; j--) {
            for(let num of bucket[j]) {
                res.push(num);
                if(res.length == k) {
                    return res;
                }
            }
        }
        return res;
    }
}
