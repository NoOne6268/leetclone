import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { longestCommonPrefix } from "./longest-common-prefix";
import { maximumSubarray } from "./maxisum-subarray";
import { mergeTwoSortedLists } from "./merge-two-sorted-lists";
import { palindromeNumber } from "./palindrome-number";
import { removeDuplicatesSortedArray } from "./remove-duplicated-sorted-array";
import { reverseInteger } from "./reverse-integer";
import { reverseLinkedList } from "./reverse-linked-list";
import { romanToInteger } from "./roman-to-integer";
import { search2DMatrix } from "./search-a-2d-matrix";
import { searchInsertPosition } from "./search-insert-position";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-integer": reverseInteger,
	"palindrome-number": palindromeNumber,
	"roman-to-integer": romanToInteger,
	"longest-common-prefix": longestCommonPrefix,
	"valid-parentheses": validParentheses,
	"merge-two-sorted-lists": mergeTwoSortedLists,
	"remove-duplicates-sorted-array": removeDuplicatesSortedArray,
	"search-insert-position": searchInsertPosition,
	"maximum-subarray": maximumSubarray,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
};
