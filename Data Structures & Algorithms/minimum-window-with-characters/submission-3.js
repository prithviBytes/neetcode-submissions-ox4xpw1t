class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";
        let formed = 0;
        let targetHashMap = {};
        for(let i = 0; i < t.length; i++) {
            targetHashMap[t[i]] = (targetHashMap[t[i]] || 0) + 1;
        }
        let target = Object.keys(targetHashMap).length;
        let left = 0;
        let right = 0;
        let startCharIdx = 0;
        let windowHashMap = {};
        let minLength = Infinity;
        while(right < s.length) {
            windowHashMap[s[right]] = (windowHashMap[s[right]] || 0) + 1
            if(targetHashMap[s[right]] && windowHashMap[s[right]] === targetHashMap[s[right]]) {
                formed++;
            }
            while(formed === target && left <= right) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    startCharIdx = left;
                }
                windowHashMap[s[left]]--;
                if(targetHashMap[s[left]] && targetHashMap[s[left]] > windowHashMap[s[left]]) {
                    formed--;
                }
                left++;
            }
            right++
        }
        return minLength === Infinity ? "" : s.slice(startCharIdx, startCharIdx + minLength)
    }
}