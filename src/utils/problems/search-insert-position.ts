import { Problem } from "../types/problem";

export const searchInsertPosition: Problem = {
  id: "search-insert-position",
  title: "Search Insert Position",
  order: 9,
  problemStatement: `<p class="mt-3">
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
</p>
<p class="mt-3">
You must write an algorithm with <code>O(log n)</code> runtime complexity.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [1,3,5,6], target = 5",
      outputText: "2"
    },
    {
      id: 2,
      inputText: "nums = [1,3,5,6], target = 2",
      outputText: "1"
    },
    {
      id: 3,
      inputText: "nums = [1,3,5,6], target = 7",
      outputText: "4"
    }
  ],
  constraints: [
    "<code>1 ≤ nums.length ≤ 10^4</code>",
    "<code>-10^4 ≤ nums[i] ≤ 10^4</code>",
    "<code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.",
    "<code>-10^4 ≤ target ≤ 10^4</code>"
  ],
  testCases: [
    { input: { nums: [1, 3, 5, 6], target: 5 }, expectedOutput: 2 },
    { input: { nums: [1, 3, 5, 6], target: 2 }, expectedOutput: 1 },
    { input: { nums: [1, 3, 5, 6], target: 7 }, expectedOutput: 4 },
    { input: { nums: [1, 3, 5, 6], target: 0 }, expectedOutput: 0 },
    { input: { nums: [1], target: 1 }, expectedOutput: 0 }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // Write your code here
};`,
    python: `class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # Write your code here
        pass`,
    java: `class Solution {
    public int searchInsert(int[] nums, int target) {
        // Write your code here
    }
}`,
    c: `int searchInsert(int* nums, int numsSize, int target){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "searchInsert",
    javascript: "searchInsert",
    python: "searchInsert",
    java: "searchInsert",
    c: "searchInsert"
  }
};
