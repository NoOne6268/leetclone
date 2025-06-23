import { Problem } from "../types/problem";

export const reverseLinkedList: Problem = {
  id: "reverse-linked-list",
  title: "Reverse Linked List",
  order: 12,
  problemStatement: `<p class="mt-3">
Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "head = [1,2,3,4,5]",
      outputText: "[5,4,3,2,1]"
    },
    {
      id: 2,
      inputText: "head = [1,2]",
      outputText: "[2,1]"
    },
    {
      id: 3,
      inputText: "head = []",
      outputText: "[]"
    }
  ],
  constraints: [
    "The number of nodes in the list is the range <code>[0, 5000]</code>.",
    "<code>-5000 ≤ Node.val ≤ 5000</code>"
  ],
  testCases: [
    { input: { head: [1, 2, 3, 4, 5] }, expectedOutput: [5, 4, 3, 2, 1] },
    { input: { head: [5, 4, 3, 2, 1] }, expectedOutput: [1, 2, 3, 4, 5] },
    { input: { head: [1, 2, 3] }, expectedOutput: [3, 2, 1] },
    { input: { head: [1] }, expectedOutput: [1] }
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
    ListNode* reverseList(ListNode* head) {
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Write your code here
};`,
    python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
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
    public ListNode reverseList(ListNode head) {
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
struct ListNode* reverseList(struct ListNode* head){
    // Write your code here
}`
  },
  equivalenceCode: {
    type: "none"
  },
  functionSignatures: { 
    cpp: "reverseList",
    javascript: "reverseList",
    python: "reverseList",
    java: "reverseList",
    c: "reverseList"
  }
};
