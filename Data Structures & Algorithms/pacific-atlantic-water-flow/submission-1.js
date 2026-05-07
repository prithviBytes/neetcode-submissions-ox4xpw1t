class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        
        const atlantic = Array.from(
            {
                length: rows
            },
            () => Array(cols).fill(false)
        )
        const pacific = Array.from(
            {
                length: rows
            },
            () => Array(cols).fill(false)
        )

        const directions = [[1,0], [-1,0], [0,1], [0,-1]];

        function dfs(r, c, visited) {
            visited[r][c] = true;

            for(let [dr, dc] of directions) {
                const nr = dr + r;
                const nc = dc + c;

                if(nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;

                if(visited[nr][nc]) continue;
                if(heights[nr][nc] < heights[r][c]) continue;
                dfs(nr, nc, visited);
            }
        }

        for(let c = 0; c < cols; c++) {
            dfs(0, c, pacific);
            dfs(rows - 1, c, atlantic);
        }

        for(let r = 0; r < rows; r++) {
            dfs(r, 0, pacific);
            dfs(r, cols - 1, atlantic);
        }

        let results=  []

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(atlantic[r][c] && pacific[r][c]){
                    results.push([r, c])
                }
            }
        }

        return results;
    }
}
