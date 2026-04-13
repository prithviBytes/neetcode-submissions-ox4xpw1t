class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
            let stack = []
    const map = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    for(let char of s) {
        if(char in map) {
            stack.push(char)
        } else {
            if(stack.length !== 0 && map[stack[stack.length - 1]] === char){
                stack.pop()
            } else {
                return false;
            }
        }
    }
    if(stack.length !== 0) return false;
    return true
    }
}
