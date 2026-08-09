class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
            let rows = Array.from({length: 9}, () => Array(9).fill(false));
    let cols = Array.from({length: 9}, () => Array(9).fill(false));
    let box = Array.from({length: 9}, () => Array(9).fill(false));
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            let currentElement = board[i][j];
            if(currentElement === ".") continue;
            currentElement = parseInt(currentElement) - 1;
            let boxId  = (Math.floor(i / 3) * 3) + Math.floor(j / 3);
            if(
                box[boxId][currentElement] ||
                rows[i][currentElement] ||
                cols[j][currentElement] 
            ) return false;
            box[boxId][currentElement] = true;
            rows[i][currentElement] = true;
            cols[j][currentElement] = true;
        }
    }
    return true;
    }
}
