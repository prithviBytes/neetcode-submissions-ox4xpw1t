class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = Array.from({length: n}, () => []);

        let visited = new Set();

        for(let [a,b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        function dfs(node) {
            visited.add(node);
            for(let neighbor of graph[node]) {
                if(!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }

        let count = 0;

        for(let i = 0; i < n; i++) {
            if(!visited.has(i)) {
                count++;
                dfs(i);
            }
        }
        return count;
    }

    
}
