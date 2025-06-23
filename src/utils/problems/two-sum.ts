import { Problem } from "../types/problem";

export const twoSum: Problem = {
  id: "two-sum",
  title: "Two Sum",
  order: 1,
  problemStatement: `<p class="mt-3">
Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.
</p>
<p class="mt-3">
You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
</p>
<p class="mt-3">
You can return the answer in any order.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [2,7,11,15], target = 9",
      outputText: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
    },
    {
      id: 2,
      inputText: "nums = [3,2,4], target = 6",
      outputText: "[1,2]"
    },
    {
      id: 3,
      inputText: "nums = [3,3], target = 6",
      outputText: "[0,1]"
    }
  ],
  constraints: [
    "<code>2 ≤ nums.length ≤ 10^4</code>",
    "<code>-10^9 ≤ nums[i] ≤ 10^9</code>",
    "<code>-10^9 ≤ target ≤ 10^9</code>"
  ],
  testCases: [
    { input: { nums: [2, 7, 11, 15], target: 9 }, expectedOutput: [0, 1] },
    { input: { nums: [3, 2, 4], target: 6 }, expectedOutput: [1, 2] },
    { input: { nums: [3, 3], target: 6 }, expectedOutput: [0, 1] },
    { input: { nums: [1, 5, 3, 8], target: 9 }, expectedOutput: [1, 3] },
    { input: { nums: [0, 4, 3, 0], target: 0 }, expectedOutput: [0, 3] }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your code here
};`,
    python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your code here
        pass`,
    java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`,
    c: `/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "array"
  },
  functionSignatures: { 
    cpp: "twoSum",
    javascript: "twoSum",
    python: "twoSum",
    java: "twoSum",
    c: "twoSum"
  }
};
