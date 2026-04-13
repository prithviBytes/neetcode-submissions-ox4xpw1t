class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let hashMap = {}
    for(let num of nums) {
        if(num in hashMap) {
            hashMap[num] += 1
        } else {
            hashMap[num] = 1
        }
    }
    let max = 0;
    for(let i of Object.values(hashMap)) {
        if(i > max) {
            max = i
        }
    }
    let bucket = Array.from({ length: max + 1 }, () => []);
    for(const [key, value] of Object.entries(hashMap)){
        console.log(bucket[value], value)
        bucket[value].push(key)
    }
    let res = []
    for (let j = bucket.length - 1; j >= 0; j--) { 
        for(let x of bucket[j]) {
            res.push(x)
        }
        if(res.length === k) {
            return res
        }
    }
    return res
}
}
