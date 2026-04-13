class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charCodeofA = "a".charCodeAt(0)
        let hashMap = {}
        for(let str of strs) {
            let temp = Array(26).fill(0);
            for(const char of str) {
                temp[char.charCodeAt(0) - charCodeofA] += 1;
            }
            let hash = temp.join('#');
            if(hash in hashMap) {
                hashMap[hash] = [...hashMap[hash], str]
            } else {
                hashMap[hash] = [str]
            }
        }
        let output = [];
        for(const element of Object.values(hashMap)) {
            output.push(element);
        }
        return output;
    }
}
