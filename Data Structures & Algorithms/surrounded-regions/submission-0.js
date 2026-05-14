class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        function dfs(r, c) {
            if(
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                board[r][c] !== 'O'
            )return;
            board[r][c] = "T";
            dfs(r - 1, c);
            dfs(r + 1, c);
            dfs(r, c - 1);
            dfs(r, c + 1);
        }

        for(let r = 0; r < rows; r++){
            dfs(r, 0);
            dfs(r, cols - 1);
        }

        for(let c = 0; c < cols; c++) {
            dfs(0, c);
            dfs(rows - 1, c);
        }

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(board[i][j] === 'T'){
                    board[i][j] = "O"
                } else if(board[i][j] === "O") {
                    board[i][j] = "X"
                }
            }
        }

        return board;
    }
}
