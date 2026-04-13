class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [[False] * 9 for _ in range(9)]
        cols = [[False] * 9 for _ in range(9)]
        grid = [[False] * 9 for _ in range(9)]

        for i in range(9):
            for j in range(9):

                if board[i][j] == ".":
                    continue
                
                num = int(board[i][j]) - 1

                grid_idx = (i // 3) * 3 + j // 3

                if rows[i][num] or cols[j][num] or grid[grid_idx][num]:
                    return False
                
                rows[i][num] = True
                cols[j][num] = True
                grid[grid_idx][num] = True

        return True