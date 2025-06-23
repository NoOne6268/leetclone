import { Problem } from "../types/problem";

export const maximumSubarray: Problem = {
  id: "maximum-subarray",
  title: "Maximum Subarray",
  order: 10,
  problemStatement: `<p class="mt-3">
Given an integer array <code>nums</code>, find the <strong>subarray</strong> with the largest sum, and return <em>its sum</em>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
      outputText: "6",
      explanation: "The subarray [4,-1,2,1] has the largest sum 6."
    },
    {
      id: 2,
      inputText: "nums = [1]",
      outputText: "1"
    },
    {
      id: 3,
      inputText: "nums = [5,4,-1,7,8]",
      outputText: "23"
    }
  ],
  constraints: [
    "<code>1 ≤ nums.length ≤ 10^5</code>",
    "<code>-10^4 ≤ nums[i] ≤ 10^4</code>"
  ],
  testCases: [
    { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, expectedOutput: 6 },
    { input: { nums: [1] }, expectedOutput: 1 },
    { input: { nums: [5, 4, -1, 7, 8] }, expectedOutput: 23 },
    { input: { nums: [-1] }, expectedOutput: -1 },
    { input: { nums: [-2, -1] }, expectedOutput: -1 }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Write your code here
};`,
    python: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Write your code here
        pass`,
    java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your code here
    }
}`,
    c: `int maxSubArray(int* nums, int numsSize){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "maxSubArray",
    javascript: "maxSubArray",
    python: "maxSubArray",
    java: "maxSubArray",
    c: "maxSubArray"
  }
};
