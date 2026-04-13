class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charCodeofA = "a".charCodeAt(0)
        let hashMap = {}
        for(let str of strs){
            let codeArr = Array(26).fill(0)
            for(let char of str){
                codeArr[char.charCodeAt(0) - charCodeofA] += 1
            }
            let key = codeArr.join("#")
            if(key in hashMap) {
                hashMap[key] = [...hashMap[key], str]
            } else {
                hashMap[key] = [str]
            }
        }
        return Object.values(hashMap)
    }
}
