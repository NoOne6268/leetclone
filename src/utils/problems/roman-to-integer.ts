import { Problem } from "../types/problem";

export const romanToInteger: Problem = {
  id: "roman-to-integer",
  title: "Roman to Integer",
  order: 4,
  problemStatement: `<p class="mt-3">
Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.
</p>
<pre class="mt-3">
<strong>Symbol</strong>       <strong>Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
</pre>
<p class="mt-3">
For example, <code>2</code> is written as <code>II</code> in Roman numeral, just two ones added together. <code>12</code> is written as <code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.
</p>
<p class="mt-3">
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:
</p>
<ul class="mt-3">
<li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.</li>
<li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.</li>
<li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li>
</ul>
<p class="mt-3">
Given a roman numeral, convert it to an integer.
</p>`,
  examples: [
    {
      id: 1,
      inputText: 's = "III"',
      outputText: "3",
      explanation: "III = 3."
    },
    {
      id: 2,
      inputText: 's = "LVIII"',
      outputText: "58",
      explanation: "L = 50, V= 5, III = 3."
    }
  ],
  constraints: [
    "<code>1 ≤ s.length ≤ 15</code>",
    "<code>s</code> contains only the characters <code>('I', 'V', 'X', 'L', 'C', 'D', 'M')</code>.",
    "It is guaranteed that <code>s</code> is a valid roman numeral in the range <code>[1, 3999]</code>."
  ],
  testCases: [
    { input: { s: "III" }, expectedOutput: 3 },
    { input: { s: "LVIII" }, expectedOutput: 58 },
    { input: { s: "MCMXC" }, expectedOutput: 1990 },
    { input: { s: "IV" }, expectedOutput: 4 },
    { input: { s: "IX" }, expectedOutput: 9 }
  ],
  starterCode: {
    cpp: `class Solution {
public:
    int romanToInt(string s) {
        // Write your code here
    }
};`,
    javascript: `/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Write your code here
};`,
    python: `class Solution:
    def romanToInt(self, s: str) -> int:
        # Write your code here
        pass`,
    java: `class Solution {
    public int romanToInt(String s) {
        // Write your code here
    }
}`,
    c: `int romanToInt(char * s){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "romanToInt",
    javascript: "romanToInt",
    python: "romanToInt",
    java: "romanToInt",
    c: "romanToInt"
  }
};
