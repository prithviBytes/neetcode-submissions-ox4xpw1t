class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
            let start = 0;
    let end = matrix.length * matrix[0].length
    while(start < end) {
        const mid = Math.floor((start + end) / 2)
        const rowIdx = Math.floor(mid / matrix[0].length)
        const colIdx = mid % matrix[0].length
        if(matrix[rowIdx][colIdx] === target) {
            return true;
        }
        if(matrix[rowIdx][colIdx] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
        
    }
    return false;
    }
}
