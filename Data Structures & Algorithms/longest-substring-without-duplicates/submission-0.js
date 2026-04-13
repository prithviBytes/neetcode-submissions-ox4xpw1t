class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    getCharCode(s) {
        return s.charCodeAt(0) - "a".charCodeAt(0);
    }
    lengthOfLongestSubstring(s) {
        if(s.length === 0 || s.length === 1) return s.length;
        let visited = Array(26).fill(false)
        let left = 0;
        let right = 0;
        let res = 0;
        while(right < s.length) {
            while(visited[this.getCharCode(s[right])]) {
                visited[this.getCharCode(s[left])] = false;
                left++;
            }
            visited[this.getCharCode(s[right])] = true;
            res = Math.max(res, right - left + 1)
            right++
        }
        return res
    }
}
