class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(!grid || grid.length === 0) return 0;

        let count = 0;
        let rows = grid.length;
        let cols = grid[0].length;

        function dfs(r, c) {
            if(
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                grid[r][c] === "0"
            ) {
                return;
            }
            grid[r][c] = "0";
            dfs(r - 1, c);
            dfs(r + 1, c);
            dfs(r, c - 1);
            dfs(r, c + 1);
        }

        for(let  i = 0; i < rows; i ++) {
            for(let j = 0; j < cols; j++){
                if(grid[i][j] === '1') {
                    count++;
                    dfs(i , j);
                }
            }
        }

        return count;
    }
}
