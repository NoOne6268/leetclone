import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

export const judge0LanguageMap = {
    cpp: 54,        // C++ GCC 9.2.0
    javascript: 63, // Node.js 12.14.0
    python: 71,     // Python 3.8.1  
    java: 62,       // Java OpenJDK 13.0.1
    c: 50           // C GCC 9.2.0
};

// Language extensions map for CodeMirror
export const languageExtensions = {
    javascript: [javascript()],
    python: [python()],
    cpp: [cpp()],
    java: [java()],
    c: [cpp()] // Use cpp extension for C
};

// Language display names
export const languageNames = {
    javascript: "JavaScript",
    python: "Python",
    cpp: "C++",
    java: "Java",
    c: "C"
};