import { Problem } from "../types/problem";

export const longestCommonPrefix: Problem = {
  id: "longest-common-prefix",
  title: "Longest Common Prefix",
  order: 5,
  problemStatement: `<p class="mt-3">
Write a function to find the <strong>longest common prefix</strong> string amongst an array of strings.
</p>
<p class="mt-3">
If there is no common prefix, return an empty string <code>""</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: 'strs = ["flower","flow","flight"]',
      outputText: '"fl"'
    },
    {
      id: 2,
      inputText: 'strs = ["dog","racecar","car"]',
      outputText: '""',
      explanation: "There is no common prefix among the input strings."
    }
  ],
  constraints: [
    "<code>1 ≤ strs.length ≤ 200</code>",
    "<code>0 ≤ strs[i].length ≤ 200</code>",
    "<code>strs[i]</code> consists of only lowercase English letters."
  ],
  testCases: [
    { input: { strs: ["flower", "flow", "flight"] }, expectedOutput: "fl" },
    { input: { strs: ["dog", "racecar", "car"] }, expectedOutput: "" },
    { input: { strs: ["interspecies", "interstellar", "interstate"] }, expectedOutput: "inters" },
    { input: { strs: ["throne", "throne"] }, expectedOutput: "throne" },
    { input: { strs: ["single"] }, expectedOutput: "single" }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Write your code here
};`,
    python: `class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Write your code here
        pass`,
    java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your code here
    }
}`,
    c: `char * longestCommonPrefix(char ** strs, int strsSize){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "longestCommonPrefix",
    javascript: "longestCommonPrefix",
    python: "longestCommonPrefix",
    java: "longestCommonPrefix",
    c: "longestCommonPrefix"
  }
};
