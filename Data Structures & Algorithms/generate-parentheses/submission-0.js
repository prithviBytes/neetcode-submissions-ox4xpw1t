class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let results = []
        function depthFirstSearch(l, r, curr) {
            if(l > n || r > n || r > l) return
            if(l === n && r === n) {
                results.push(curr)
                return
            }
            depthFirstSearch(l + 1, r, curr + "(")
            depthFirstSearch(l, r + 1, curr + ")")
        }
        depthFirstSearch(0, 0, "")
        return results
    }
}
