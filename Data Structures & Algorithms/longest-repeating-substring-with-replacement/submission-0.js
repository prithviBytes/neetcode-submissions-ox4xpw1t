class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    getCharCode(s) {
    return s.charCodeAt(0) - "a".charCodeAt(0);
}
    characterReplacement(s, k) {
        let left = 0;
        let right = 0;
        let counter = {}
        let maxCnt = 0;
        let maxLength = 0;
        while(right < s.length) {
            counter[s[right]] = (counter[s[right]] || 0) + 1
            maxCnt = Math.max(maxCnt, counter[s[right]])
            while((right - left + 1 ) > (maxCnt + k)){
                counter[s[left]]--;
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1)
            right++;
        }
        return maxLength
    }
}
