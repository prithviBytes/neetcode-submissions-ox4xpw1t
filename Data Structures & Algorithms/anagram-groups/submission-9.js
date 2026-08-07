class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    getCharIdx(char) {
        return char.toLowerCase().charCodeAt(0) - 97;
    }
    groupAnagrams(strs) {
        let hashMap = {};
        for(let str of strs) {
            const counter = Array(26).fill(0);
            for(let char of str) {
                counter[this.getCharIdx(char)]++;
            }
            let hash = counter.join("#")
            if(hashMap[hash]) {
                hashMap[hash].push(str)
            } else {
                hashMap[hash] = [str];
            }
        }
        let result = [];
        for(let res of Object.values(hashMap)){
            result.push(res);
        }
        return result;
    }
}
