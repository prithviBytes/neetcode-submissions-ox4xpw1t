class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        let hashMap = {}
        for(let i of s){
            if(hashMap[i]){
                hashMap[i] += 1
            } else {
                hashMap[i] = 1
            }
        }
        for(let j = 0; j < t.length; j++) {
            if(hashMap[t[j]]){
                hashMap[t[j]] -= 1
            } else {
                return false
            }
        }
        for(let k of Object.keys(hashMap)) {
            if(hashMap[k] !== 0) {
                return false
            }
        }
        return true
    }
}
