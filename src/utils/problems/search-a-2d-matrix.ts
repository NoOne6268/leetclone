import { Problem } from "../types/problem";

export const search2DMatrix: Problem = {
  id: "search-a-2d-matrix",
  title: "Search a 2D Matrix",
  order: 13,
  problemStatement: `<p class="mt-3">
Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:
</p>
<ul class="mt-3">
<li>Integers in each row are sorted from left to right.</li>
<li>The first integer of each row is greater than the last integer of the previous row.</li>
</ul>
<p class="mt-3">
Given <code>matrix</code>, an <code>m x n</code> matrix, and <code>target</code>, return <code>true</code> if <code>target</code> is in the matrix, and <code>false</code> otherwise.
</p>`,
  examples: [
    {
      id: 1,
      inputText: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
      outputText: "true"
    },
    {
      id: 2,
      inputText: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13',
      outputText: "false"
    }
  ],
  constraints: [
    "<code>m == matrix.length</code>",
    "<code>n == matrix[i].length</code>",
    "<code>1 ≤ m, n ≤ 100</code>",
    "<code>-10^4 ≤ matrix[i][j], target ≤ 10^4</code>"
  ],
  testCases: [
    { 
      input: { 
        matrix: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60]
        ], 
        target: 3 
      }, 
      expectedOutput: true 
    },
    { 
      input: { 
        matrix: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60]
        ], 
        target: 13 
      }, 
      expectedOutput: false 
    }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Write your code here
};`,
    python: `class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # Write your code here
        pass`,
    java: `class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        // Write your code here
    }
}`,
    c: `#include <stdbool.h>

bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "searchMatrix",
    javascript: "searchMatrix",
    python: "searchMatrix",
    java: "searchMatrix",
    c: "searchMatrix"
  }
};
