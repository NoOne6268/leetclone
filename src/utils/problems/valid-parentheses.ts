import { Problem } from "../types/problem";

export const validParentheses: Problem = {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  order: 6,
  problemStatement: `<p class="mt-3">
Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.
</p>
<p class="mt-3">
An input string is valid if:
</p>
<ol class="mt-3">
<li>Open brackets must be closed by the same type of brackets.</li>
<li>Open brackets must be closed in the correct order.</li>
<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>`,
  examples: [
    {
      id: 1,
      inputText: 's = "()"',
      outputText: "true"
    },
    {
      id: 2,
      inputText: 's = "()[]{}"',
      outputText: "true"
    },
    {
      id: 3,
      inputText: 's = "(]"',
      outputText: "false"
    }
  ],
  constraints: [
    "<code>1 ≤ s.length ≤ 10^4</code>",
    "<code>s</code> consists of parentheses only <code>'()[]{}'</code>."
  ],
  testCases: [
    { input: { s: "()" }, expectedOutput: true },
    { input: { s: "()[]{}" }, expectedOutput: true },
    { input: { s: "(]" }, expectedOutput: false },
    { input: { s: "([)]" }, expectedOutput: false },
    { input: { s: "{[]}" }, expectedOutput: true }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    bool isValid(string s) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Write your code here
};`,
    python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Write your code here
        pass`,
    java: `class Solution {
    public boolean isValid(String s) {
        // Write your code here
    }
}`,
    c: `#include <stdbool.h>

bool isValid(char * s){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "isValid",
    javascript: "isValid",
    python: "isValid",
    java: "isValid",
    c: "isValid"
  }
};
