import { Problem } from "../types/problem";

export const mergeTwoSortedLists: Problem = {
  id: "merge-two-sorted-lists",
  title: "Merge Two Sorted Lists",
  order: 7,
  problemStatement: `<p class="mt-3">
You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.
</p>
<p class="mt-3">
Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.
</p>
<p class="mt-3">
Return <em>the head of the merged linked list</em>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "list1 = [1,2,4], list2 = [1,3,4]",
      outputText: "[1,1,2,3,4,4]"
    },
    {
      id: 2,
      inputText: "list1 = [], list2 = []",
      outputText: "[]"
    },
    {
      id: 3,
      inputText: "list1 = [], list2 = [0]",
      outputText: "[0]"
    }
  ],
  constraints: [
    "The number of nodes in both lists is in the range <code>[0, 50]</code>.",
    "<code>-100 ≤ Node.val ≤ 100</code>",
    "Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order."
  ],
  testCases: [
    { input: { list1: [1, 2, 4], list2: [1, 3, 4] }, expectedOutput: [1, 1, 2, 3, 4, 4] },
    { input: { list1: [], list2: [] }, expectedOutput: [] },
    { input: { list1: [], list2: [0] }, expectedOutput: [0] },
    { input: { list1: [1], list2: [2] }, expectedOutput: [1, 2] },
    { input: { list1: [2], list2: [1] }, expectedOutput: [1, 2] }
  ],
  starterCode: {
    cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Write your code here
    }
};`,
    javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Write your code here
};`,
    python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # Write your code here
        pass`,
    java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your code here
    }
}`,
    c: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "mergeTwoLists",
    javascript: "mergeTwoLists",
    python: "mergeTwoLists",
    java: "mergeTwoLists",
    c: "mergeTwoLists"
  }
};
