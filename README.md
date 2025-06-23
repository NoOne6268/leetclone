# Leetclone

Leetclone is a full-stack web application inspired by LeetCode, designed to help users practice coding problems in a real interview-like environment. Built with [Next.js](https://nextjs.org/), Firebase, and CodeMirror, it provides a seamless experience for solving, submitting, and tracking coding challenges.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Core Functionality](#core-functionality)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 📝 **Coding Playground:** Solve algorithm problems in an interactive editor with syntax highlighting and language support (JavaScript, Python, C++, Java).
- 🧪 **Test Cases:** Each problem comes with multiple test cases for validation.
- 🚦 **Auto-Grading:** Submissions are evaluated in real-time using the Judge0 API.
- 📊 **Problem List:** Browse problems by title, difficulty, and category.
- 🔒 **Authentication:** Sign up, log in, and track your progress.
- ⭐ **Like, Dislike, and Star:** Engage with problems by liking, disliking, or starring them.
- 🎉 **Confetti Animation:** Celebrate when all test cases pass!
- 📺 **Video Solutions:** Watch YouTube video explanations for select problems.
- 🏆 **Progress Tracking:** Solved problems are marked and stored in your user profile.

---

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, CodeMirror
- **Backend:** Firebase (Firestore, Auth)
- **Code Execution:** Judge0 API
- **State Management:** Recoil
- **UI Libraries:** React Icons, React Toastify, React Confetti, React Split

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd leetclone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your Firebase and Judge0 API credentials.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## Project Structure

```
leetclone/
  ├── src/
  │   ├── components/         # UI components (navbar, topbar, workspace, etc.)
  │   ├── pages/              # Next.js pages (routing)
  │   ├── utils/              # Problem data, constants, types
  │   ├── hooks/              # Custom React hooks
  │   └── styles/             # Global styles (Tailwind)
  ├── public/                 # Static assets
  ├── migrate-problems.ts     # Script for migrating problems
  ├── package.json
  └── README.md
```

---

## Core Functionality

### Problem List

- The homepage displays a table of problems with their status, title, difficulty, category, and solution video (if available).
- Problems are fetched from Firestore and displayed with real-time updates.

### Problem Solving Workspace

- Each problem has a dedicated page with:
  - **Description:** Problem statement, constraints, and examples.
  - **Code Editor:** Powered by CodeMirror, supports multiple languages and themes.
  - **Test Cases:** Run and submit code against provided test cases.
  - **Submission Feedback:** Real-time feedback with error messages and success confetti.

### User Progress

- Authenticated users can:
  - Track solved problems.
  - Like, dislike, or star problems.
  - View their progress across sessions.

### Authentication

- Email/password authentication via Firebase.
- Modals for login, registration, and password reset.

---

## Authentication

- **Sign Up / Log In:** Users can create an account or log in to save their progress.
- **Password Reset:** Users can reset their password via email.
- **Session Management:** User state is managed with Firebase Auth and React hooks.

---

## Contributing

Contributions are welcome! Please open issues or pull requests for new features, bug fixes, or suggestions.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Judge0](https://judge0.com/)
- [LeetCode](https://leetcode.com/) (inspiration)

---

**Happy Coding! 🚀**
