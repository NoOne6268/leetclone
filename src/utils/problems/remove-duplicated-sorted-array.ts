import { Problem } from "../types/problem";

export const removeDuplicatesSortedArray: Problem = {
  id: "remove-duplicates-sorted-array",
  title: "Remove Duplicates from Sorted Array",
  order: 8,
  problemStatement: `<p class="mt-3">
Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove the duplicates <strong>in-place</strong> such that each unique element appears only <strong>once</strong>. The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>. Then return <em>the number of unique elements in <code>nums</code></em>.
</p>
<p class="mt-3">
Consider the number of unique elements of <code>nums</code> to be <code>k</code>, to get accepted, you need to do the following things:
</p>
<ul class="mt-3">
<li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the unique elements in the order they were present in <code>nums</code> initially. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
<li>Return <code>k</code>.</li>
</ul>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [1,1,2]",
      outputText: "2, nums = [1,2,_]",
      explanation: "Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively."
    },
    {
      id: 2,
      inputText: "nums = [0,0,1,1,1,2,2,3,3,4]",
      outputText: "5, nums = [0,1,2,3,4,_,_,_,_,_]"
    }
  ],
  constraints: [
    "<code>1 ≤ nums.length ≤ 3 * 10^4</code>",
    "<code>-100 ≤ nums[i] ≤ 100</code>",
    "<code>nums</code> is sorted in <strong>non-decreasing</strong> order."
  ],
  testCases: [
    { input: { nums: [1, 1, 2] }, expectedOutput: 2 },
    { input: { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] }, expectedOutput: 5 },
    { input: { nums: [1, 2, 3] }, expectedOutput: 3 },
    { input: { nums: [1] }, expectedOutput: 1 },
    { input: { nums: [1, 1, 1, 1] }, expectedOutput: 1 }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Write your code here
};`,
    python: `class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # Write your code here
        pass`,
    java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Write your code here
    }
}`,
    c: `int removeDuplicates(int* nums, int numsSize){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "removeDuplicates",
    javascript: "removeDuplicates",
    python: "removeDuplicates",
    java: "removeDuplicates",
    c: "removeDuplicates"
  }
};
