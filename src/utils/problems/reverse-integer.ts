import { Problem } from "../types/problem";

export const reverseInteger: Problem = {
  id: "reverse-integer",
  title: "Reverse Integer",
  order: 2,
  problemStatement: `<p class="mt-3">
Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2^31, 2^31 - 1]</code>, then return <code>0</code>.
</p>
<p class="mt-3">
<strong>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</strong>
</p>`,
  examples: [
    {
      id: 1,
      inputText: "x = 123",
      outputText: "321"
    },
    {
      id: 2,
      inputText: "x = -123",
      outputText: "-321"
    },
    {
      id: 3,
      inputText: "x = 120",
      outputText: "21"
    }
  ],
  constraints: ["<code>-2^31 ≤ x ≤ 2^31 - 1</code>"],
  testCases: [
    { input: { x: 123 }, expectedOutput: 321 },
    { input: { x: -123 }, expectedOutput: -321 },
    { input: { x: 120 }, expectedOutput: 21 },
    { input: { x: 0 }, expectedOutput: 0 },
    { input: { x: 1534236469 }, expectedOutput: 0 }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    int reverse(int x) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Write your code here
};`,
    python: `class Solution:
    def reverse(self, x: int) -> int:
        # Write your code here
        pass`,
    java: `class Solution {
    public int reverse(int x) {
        // Write your code here
    }
}`,
    c: `int reverse(int x){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "reverse",
    javascript: "reverse",
    python: "reverse",
    java: "reverse",
    c: "reverse"
  }
};
