class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let hashMap = {};
        for(const char of s) {
            if(hashMap[char]) {
                hashMap[char] += 1;
            } else {
                hashMap[char] = 1
            }
        }
        for(const char of t) {
            if(!hashMap[char]) return false;
            hashMap[char] -= 1
        }
        for(const key of Object.keys(hashMap)) {
            if(hashMap[key] !== 0) return false; 
        }
        return true;
    }
}
