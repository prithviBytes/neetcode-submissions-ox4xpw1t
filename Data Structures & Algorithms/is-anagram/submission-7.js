class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let hashMap = {};
       for(let char of s) {
        if(hashMap[char]) {
            hashMap[char]++;
        } else {
            hashMap[char] = 1;
        }
       }
       for(let char of t) {
        if(!hashMap[char]) return false;
        hashMap[char]--;
       }
       for(let freq of Object.values(hashMap)){
        if(freq !== 0) return false;
       }
       return true;
    }
}
