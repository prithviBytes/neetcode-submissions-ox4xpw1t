class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        candidates = candidates.sort((a,b) => a - b)
        function backtrack(start, current, sum) {
            if(sum === target) {
                result.push([...current])
                return
            }
            if(sum > target) return
            for(let i = start; i < candidates.length; i++) {
                if(i > start && candidates[i] === candidates[i-1]) continue;
                current.push(candidates[i])
                backtrack(i + 1, current, sum + candidates[i]);
                current.pop();
            }
        }
        backtrack(0, [], 0)
        return result
    }
}
