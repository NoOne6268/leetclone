import { Problem } from "../types/problem";

export const palindromeNumber: Problem = {
  id: "palindrome-number",
  title: "Palindrome Number",
  order: 3,
  problemStatement: `<p class="mt-3">
Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a <strong>palindrome</strong>, and <code>false</code> otherwise.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "x = 121",
      outputText: "true",
      explanation: "121 reads as 121 from left to right and from right to left."
    },
    {
      id: 2,
      inputText: "x = -121",
      outputText: "false",
      explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
    }
  ],
  constraints: ["<code>-2^31 ≤ x ≤ 2^31 - 1</code>"],
  testCases: [
    { input: { x: 121 }, expectedOutput: true },
    { input: { x: -121 }, expectedOutput: false },
    { input: { x: 10 }, expectedOutput: false },
    { input: { x: 0 }, expectedOutput: true },
    { input: { x: 1221 }, expectedOutput: true }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    bool isPalindrome(int x) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Write your code here
};`,
    python: `class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Write your code here
        pass`,
    java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your code here
    }
}`,
    c: `#include <stdbool.h>

bool isPalindrome(int x){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "isPalindrome",
    javascript: "isPalindrome",
    python: "isPalindrome",
    java: "isPalindrome",
    c: "isPalindrome"
  }
};
