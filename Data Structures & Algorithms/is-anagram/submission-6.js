class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let freqCounter = {};
        for(let char of s) {
            if(char in freqCounter){
                freqCounter[char]++;
            } else {
                freqCounter[char] = 1;
            }
        }

        for(let char of t) {
            if(char in freqCounter) {
                freqCounter[char]--;
            } else {
                return false;
            }
        }

        for(let freq of Object.values(freqCounter)) {
            if(freq !== 0) return false;
        }
        return true;
    }
}
