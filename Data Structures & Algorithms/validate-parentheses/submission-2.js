class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const map = {
            "{": "}",
            "[": "]",
            "(": ")"
        }
        for(let i = 0; i < s.length; i++) {
            if(s[i] in map) {
                stack.push(s[i])
            } else {
                if(stack.length !== 0 && map[stack[stack.length - 1]] === s[i]) {
                    stack.pop()
                } else { 
                    return false;
                }
            }
        }
        return stack.length !== 0 ? false : true;
    }
}
