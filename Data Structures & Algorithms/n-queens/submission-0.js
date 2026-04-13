class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let cols = new Set();
        let diag1 = new Set();
        let diag2 = new Set();
let board = Array.from({ length: n }, () => Array(n).fill("."));        let result = [];
        function backtrack(row) {
            if(row === n) {
                result.push(board.map(r => r.join("")))
                return;
            }
            for(let c = 0; c < n; c++) {
                if(cols.has(c) || diag1.has(row - c) || diag2.has( row + c)){
                    continue;
                }
                board[row][c] = "Q";
                cols.add(c);
                diag1.add(row - c);
                diag2.add(row + c);
                backtrack(row + 1);
                board[row][c] = ".";
                cols.delete(c);
                diag1.delete(row - c);
                diag2.delete(row + c);
            }
        }
        backtrack(0);
        return result;
    }
}
