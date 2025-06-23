import { Problem } from "../types/problem";

export const jumpGame: Problem = {
  id: "jump-game",
  order: 11,
  title: "Jump Game",
  problemStatement: `<p class="mt-3">
You are given an integer array <code>nums</code>. You are initially positioned at the <strong>first index</strong>, and each element in the array represents your maximum jump length at that position.
</p>
<p class="mt-3">
Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [2,3,1,1,4]",
      outputText: "true",
      explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index."
    },
    {
      id: 2,
      inputText: "nums = [3,2,1,0,4]",
      outputText: "false",
      explanation: "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
    }
  ],
  constraints: [
    "<code>1 ≤ nums.length ≤ 10^4</code>",
    "<code>0 ≤ nums[i] ≤ 10^5</code>"
  ],
  testCases: [
    { input: { nums: [2, 3, 1, 1, 4] }, expectedOutput: true },
    { input: { nums: [3, 2, 1, 0, 4] }, expectedOutput: false },
    { input: { nums: [2, 0, 0] }, expectedOutput: true },
    { input: { nums: [2, 5, 0, 0] }, expectedOutput: true }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    bool canJump(vector<int>& nums) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // Write your code here
};`,
    python: `class Solution:
    def canJump(self, nums: List[int]) -> bool:
        # Write your code here
        pass`,
    java: `class Solution {
    public boolean canJump(int[] nums) {
        // Write your code here
    }
}`,
    c: `#include <stdbool.h>

bool canJump(int* nums, int numsSize){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "canJump",
    javascript: "canJump",
    python: "canJump",
    java: "canJump",
    c: "canJump"
  }
};
