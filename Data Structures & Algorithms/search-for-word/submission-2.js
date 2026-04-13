class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const row = board.length;
        const col = board[0].length;
        function dfs(r, c, index) {
            if(index === word.length) {
                return true;
            }

            if(
                r < 0 ||
                r >= row ||
                c < 0 ||
                c>= col ||
                board[r][c] !== word[index]
            ) {
                return false;
            }

            const temp = board[r][c];
            board[r][c] = "#";

            let found = (
                dfs(r - 1, c, index + 1) ||
                dfs(r + 1, c, index + 1) ||
                dfs(r, c - 1, index + 1) ||
                dfs(r, c + 1, index + 1) 
            )

            board[r][c] = temp;

            return found;
        }
        for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
                if(dfs(i, j, 0)){
                    return true;
                }
            }
        }
        return false;
    }
}
