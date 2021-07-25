from typing import List
import unittest

class Solution:
    # Start at Top Right, Move Only Left (target is larger then current element) and Down (target is smaller than current element)
    def searchMatrix_from_top_right(self, matrix: List[List[int]], target: int) -> bool:    
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if not len(matrix) or not len(matrix[0]):
			# Quick response for empty matrix
            return False
        if target < matrix[0][0] or target > matrix[-1][-1]:
            return False
			
        row_len, col_len = len(matrix), len(matrix[0])
        # Set pointers to the top-right corner.
        row, col = 0, col_len-1
        while 0 <= row < row_len and 0 <= col < col_len:
            if matrix[row][col] == target:
                return True
            if matrix[row][col] < target:
                row += 1
            else:
                col -= 1
        return False
		
    # Twin Algorithm
	# Start at Bottom Left, Move Only Right (target is larger then current element) and Up (target is smaller than current element)
    def searchMatrix_from_bottom_left(self, matrix: List[List[int]], target: int) -> bool:    
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if not len(matrix) or not len(matrix[0]):
			# Quick response for empty matrix
            return False
        if target < matrix[0][0] or target > matrix[-1][-1]:
            return False
			
        row_len, col_len = len(matrix), len(matrix[0])
        # Set pointers to the bottom-left corner.
        row, col = row_len-1, 0        
        while 0 <= row < row_len and 0 <= col < col_len:
            if matrix[row][col] == target:
                return True
            if matrix[row][col] < target:
                col += 1
            else:
                row -= 1
        return False		

class Test(unittest.TestCase):
    def setUp(self) -> None:
        pass

    def tearDown(self) -> None:
        pass

    def test_searchMatrix_from_top_right(self) -> None:
        sol = Solution()
        for matrix, target, solution in (
            [
                [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
                5,
				True
            ],
            [
                [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
                20,
                False
            ]
        ):
            self.assertEqual(
                sol.searchMatrix_from_top_right(matrix, target),
                solution
            )
            self.assertEqual(
                sol.searchMatrix_from_bottom_left(matrix, target),
                solution
            )

if __name__ == "__main__":
	unittest.main()