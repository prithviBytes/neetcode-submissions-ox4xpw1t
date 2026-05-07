class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const INF = 2147483647;

        let queue = [];

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ]

        while(queue.length !== 0){
            let [r, c] = queue.shift();
            for(const [dr, dc] of directions) {
                const nr = dr + r;
                const nc = dc + c;
                if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === INF) {
                    grid[nr][nc] = grid[r][c] + 1;
                    queue.push([nr, nc])
                }
            }
        }
    }
}
