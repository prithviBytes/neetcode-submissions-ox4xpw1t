class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let graph = new Array(numCourses).fill(0).map(() => []);

        for (let [a, b] of prerequisites) {
            graph[b].push(a);
        }

        const state = new Array(numCourses).fill(0);

        function dfs(node) {
            if (state[node] === 1) return true;

            if (state[node] === 2) return false;

            state[node] = 1;

            for (let neighbor of graph[node]) {
                if (dfs(neighbor)) return true;
            }

            state[node] = 2;
        }

        for (let i = 0; i < numCourses; i++) {
            if (dfs(i)) return false; // cycle found
        }

        return true;
    }
}
