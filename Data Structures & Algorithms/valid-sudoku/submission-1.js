class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
      isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => Array(9).fill(false));
  const columns = Array.from({ length: 9 }, () => Array(9).fill(false));
  const boxes = Array.from({ length: 9 }, () => Array(9).fill(false));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];

      if (cell === ".") continue;

      const num = parseInt(cell, 10) - 1;
      if (num < 0 || num > 8 || isNaN(num)) return false;

      const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i][num] || columns[j][num] || boxes[boxIdx][num]) {
        return false; // Duplicate found
      }

      rows[i][num] = true;
      columns[j][num] = true;
      boxes[boxIdx][num] = true;
    }
  }

  return true;
}
}
