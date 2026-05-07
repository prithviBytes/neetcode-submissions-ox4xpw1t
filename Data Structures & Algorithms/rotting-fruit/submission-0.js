class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let queue = [];

        let currentMin = 0;
        let fresh = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        while (queue.length !== 0 && fresh > 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                let [r, c] = queue.shift();
                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        queue.push([nr, nc]);
                        fresh--;
                    }
                }
            }
            currentMin++;
        }
        return fresh === 0 ? currentMin : -1;
    }
}
