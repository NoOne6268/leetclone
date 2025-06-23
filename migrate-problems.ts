import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, writeBatch } from "firebase/firestore";
import * as dotenv from 'dotenv';
import { DBProblem, Problem } from "@/utils/types/problem";

dotenv.config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const problemsArray = {
  "two-sum": {
    category: "Array",
    difficulty: "Easy",
    dislikes: 0,
    id: "two-sum",
    likes: 0,
    link: "",
    order: 1,
    title: "Two Sum",
    videoId: ""
  },
  "reverse-integer": {
    category: "Math",
    difficulty: "Medium",
    dislikes: 0,
    id: "reverse-integer",
    likes: 0,
    link: "",
    order: 2,
    title: "Reverse Integer",
    videoId: ""
  },
  "palindrome-number": {
    category: "Math",
    difficulty: "Easy",
    dislikes: 0,
    id: "palindrome-number",
    likes: 0,
    link: "",
    order: 3,
    title: "Palindrome Number",
    videoId: ""
  },
  "roman-to-integer": {
    category: "String",
    difficulty: "Easy",
    dislikes: 0,
    id: "roman-to-integer",
    likes: 0,
    link: "",
    order: 4,
    title: "Roman to Integer",
    videoId: ""
  },
  "longest-common-prefix": {
    category: "String",
    difficulty: "Easy",
    dislikes: 0,
    id: "longest-common-prefix",
    likes: 0,
    link: "",
    order: 5,
    title: "Longest Common Prefix",
    videoId: ""
  },
  "valid-parentheses": {
    category: "Stack",
    difficulty: "Easy",
    dislikes: 0,
    id: "valid-parentheses",
    likes: 0,
    link: "",
    order: 6,
    title: "Valid Parentheses",
    videoId: ""
  },
  "merge-two-sorted-lists": {
    category: "Linked List",
    difficulty: "Easy",
    dislikes: 0,
    id: "merge-two-sorted-lists",
    likes: 0,
    link: "",
    order: 7,
    title: "Merge Two Sorted Lists",
    videoId: ""
  },
  "remove-duplicates-sorted-array": {
    category: "Array",
    difficulty: "Easy",
    dislikes: 0,
    id: "remove-duplicates-sorted-array",
    likes: 0,
    link: "",
    order: 8,
    title: "Remove Duplicates from Sorted Array",
    videoId: ""
  },
  "search-insert-position": {
    category: "Binary Search",
    difficulty: "Easy",
    dislikes: 0,
    id: "search-insert-position",
    likes: 0,
    link: "",
    order: 9,
    title: "Search Insert Position",
    videoId: ""
  },
  "maximum-subarray": {
    category: "Dynamic Programming",
    difficulty: "Medium",
    dislikes: 0,
    id: "maximum-subarray",
    likes: 0,
    link: "",
    order: 10,
    title: "Maximum Subarray",
    videoId: ""
  },
  "jump-game": {
    category: "Greedy",
    difficulty: "Medium",
    dislikes: 0,
    id: "jump-game",
    likes: 0,
    link: "",
    order: 11,
    title: "Jump Game",
    videoId: ""
  },
  "reverse-linked-list": {
    category: "Linked List",
    difficulty: "Easy",
    dislikes: 0,
    id: "reverse-linked-list",
    likes: 0,
    link: "",
    order: 12,
    title: "Reverse Linked List",
    videoId: ""
  },
  "search-a-2d-matrix": {
    category: "Binary Search",
    difficulty: "Medium",
    dislikes: 0,
    id: "search-a-2d-matrix",
    likes: 0,
    link: "",
    order: 13,
    title: "Search a 2D Matrix",
    videoId: ""
  }
};

const problems = Object.entries(problemsArray).map(([docId, problem]) => ({
  ...problem,
  id: docId // Ensure document ID matches the problem ID
}));

async function migrateProblems() {
  console.log("Starting migration of coding problems...");
  
  try {
    const batch = writeBatch(firestore);
    const problemsCollection = collection(firestore, "problems");

    // Add each problem as a document with its ID
    problems.forEach(problem => {
      const docRef = doc(problemsCollection, problem.id);
      batch.set(docRef, problem);
    });

    await batch.commit();
    console.log(`✅ Successfully wrote ${problems.length} problems with their IDs as document IDs`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error writing documents:", error);
    process.exit(1);
  }
}

// Add environment validation
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  console.error("❌ Missing Firebase configuration values");
  process.exit(1);
}

migrateProblems();
