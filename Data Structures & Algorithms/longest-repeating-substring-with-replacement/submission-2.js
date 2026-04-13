class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let counter = {}
        let left = 0;
        let right = 0;
        let maxCnt = 0;
        let max = 0;
        while(right < s.length){
            counter[s[right]] = (counter[s[right]] || 0) + 1;
            maxCnt = Math.max(maxCnt, counter[s[right]])
            while((right - left + 1) > maxCnt + k) {
                counter[[s[left]]] = counter[[s[left]]] - 1;
                left++;
            }
            max = Math.max(max, right - left + 1)
            right++;
        }
        return max;
    }
}
