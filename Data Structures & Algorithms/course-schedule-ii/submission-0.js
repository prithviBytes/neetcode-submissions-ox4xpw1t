class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let graph = new Array(numCourses).fill(0).map(() => []);

        for(let [course, prereq] of prerequisites) {
            graph[prereq].push(course);
        }

        const state = new Array(numCourses).fill(0);
        const result = [];

        function dfs(node) {
            if(state[node] === 1) return false;
            if(state[node] === 2) return true;

            state[node] = 1;

            for(let neighbor of graph[node]) {
                if(!dfs(neighbor)) return false;
            }

            state[node] = 2;
            result.push(node);
            return true;
        }
        
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }

    return result.reverse();

    }

    
}
