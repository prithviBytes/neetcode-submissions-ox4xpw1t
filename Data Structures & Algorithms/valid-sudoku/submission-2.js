class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: 9}, () => Array(9).fill(false))
        let cols = Array.from({length: 9}, () => Array(9).fill(false))
        let boxes = Array.from({length: 9}, () => Array(9).fill(false))
        for(let i = 0 ; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                let currentBox = board[i][j]
                if(currentBox === ".") continue;
                let currentVal = parseInt(currentBox, 10) - 1;
                if(currentVal < 0 || currentVal > 8) return false;
                let boxId =(Math.floor(i / 3) * 3) + Math.floor(j / 3)
                if(rows[i][currentVal] ||cols[j][currentVal] || boxes[boxId][currentVal] ) return false;
                rows[i][currentVal] = true;
                cols[j][currentVal] = true;
                boxes[boxId][currentVal] = true;
            }
        }
        return true;
    }
}
