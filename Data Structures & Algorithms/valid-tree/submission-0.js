class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n - 1) return false;
        const graph = Array.from({length: n}, () => [])
        let visited = new Set();

        for(let [a,b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        function dfs(node, parent) {
            if(visited.has(node)) return false;
            visited.add(node);

            for(let neighbor of graph[node]) {
                if(neighbor === parent) continue;
                if(!dfs(neighbor, node)) return false;
            }

            return true;
        }

        return dfs(0, -1) && visited.size === n;
    }
}
