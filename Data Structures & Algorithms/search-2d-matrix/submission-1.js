class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0;
        let end = matrix[0].length * matrix.length;
        while(start < end) {
            let mid = Math.floor((start + end) / 2);
            let rowIdx = Math.floor(mid / matrix[0].length);
            let colIdx = mid % matrix[0].length;
            if(matrix[rowIdx][colIdx] === target) {
                return true;
            }
            if(target > matrix[rowIdx][colIdx]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return false;
    }
}
