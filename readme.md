# JavaScript Review

A web application for reviewing JavaScript fundamentals, classic algorithms, and problem-solving through an interactive interface. The project evolved from exercises run only in the console into an experience built with **Vue 3**, **Vue Router**, **Vite**, and **Tailwind CSS**.

Problem logic is kept separate from the interface so every solution is easy to read, study, and reuse.

## Current Features

- Exercise view with six JavaScript solutions and their example cases.
- Cards displaying each problem's name, input, result, and solution code.
- **Exercises** mode for browsing implemented solutions.
- **Challenges** mode with three challenges: FizzBuzz, array sum, and string reversal.
- A `textarea`-based code editor for writing an attempt before revealing the expected result.
- Basic challenge validation that checks whether an attempt exists and whether the code has valid syntax.
- Confirmation modal before displaying the expected solution.
- Reset action for trying each challenge again.
- Responsive top navigation with a mobile menu.
- Solutions dropdown with direct links to every exercise.
- Floating navigation for switching views and moving between exercises.
- Smooth scrolling and active exercise highlighting powered by `IntersectionObserver`.
- `/leetcode` route prepared for future problems.

> Note: challenges currently validate the syntax of the submitted code and display an expected output. Automatic execution of user code is planned for a future iteration.

## Implemented Exercises

The solutions are located in [`src/utils/problems.js`](src/utils/problems.js):

1. **Two Sum:** finds the indices of two numbers whose sum matches the target. It uses a `Map` with $O(N)$ complexity.
2. **Reverse String:** reverses a text string.
3. **Palindrome:** checks whether a string is a palindrome while ignoring case and non-alphanumeric characters.
4. **Factorial:** calculates the factorial of a non-negative integer using an iterative approach.
5. **Merge Sorted Arrays:** combines two previously sorted arrays into one.
6. **Flatten Array:** flattens arrays nested at any level through recursion.

## Available Challenges

The interactive challenges are defined in [`src/views/HomeView.vue`](src/views/HomeView.vue) and use [`src/components/ConsoleChallenge.vue`](src/components/ConsoleChallenge.vue):

- **FizzBuzz:** prints values from 1 to 100, replacing the appropriate multiples with `Fizz`, `Buzz`, or `FizzBuzz`.
- **Array Sum:** adds all numbers in an array.
- **String Reversal:** creates a function that reverses a string.

## Technologies

- Vue 3 with `<script setup>`.
- Vue Router 4 for the main routes.
- Vite for development and production builds.
- Tailwind CSS 4 for interface styling.
- JavaScript ES Modules for problem logic.

## Project Structure

```text
src/
├── App.vue                    # Main layout and application composition
├── main.js                    # Vue entry point
├── style.css                  # Global styles and visual foundation
├── components/
│   ├── ConsoleChallenge.vue   # Challenge editor, validation, and flow
│   ├── ExerciseCard.vue       # Card for each solution
│   ├── FloatingNav.vue        # Side navigation between views and exercises
│   ├── Navbar.vue             # Responsive top navigation
│   └── ReusableButton.vue     # Reusable button
├── router/
│   └── index.js               # Application routes
├── utils/
│   ├── problems.js            # Algorithms and pure solutions
│   └── 00_Introduction.js     # JavaScript fundamentals examples
└── views/
    ├── HomeView.vue           # Exercises and interactive challenges
    └── LeetCodeView.vue       # Space prepared for LeetCode
```

## Installation and Usage

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Then open the URL provided by Vite, usually `http://localhost:5173/`.

### Available Scripts

```bash
npm run dev       # Starts the development server
npm run build     # Creates the production build
npm run preview   # Serves the generated build locally
```

## Future Ideas

### Learning Experience

- Safely execute user-submitted code and compare its result against test cases.
- Add progressive hints, step-by-step explanations, and a hidden solution for each challenge.
- Display time and space complexity alongside every algorithm.
- Add editable test cases and more specific error messages.
- Store progress, completed challenges, and attempts in `localStorage`.

### Problem Library

- Complete the `/leetcode` view with problems grouped by difficulty, topic, and status.
- Add problems covering arrays, strings, objects, recursion, searching, sorting, and data structures.
- Allow users to filter, search, and sort exercises.
- Add tags, difficulty levels, additional examples, and links to each solution's explanation.

### Quality and Project Improvements

- Add automated tests for the functions in [`src/utils/problems.js`](src/utils/problems.js).
- Add component and navigation tests.
- Configure ESLint and a continuous integration workflow.
- Improve accessibility, keyboard navigation, and light/dark theme support.
- Move exercises and challenges into data files so adding content does not require editing the views.

## Project Goal

This repository is a practice space: every new solution should prioritize clear code, understandable examples, and an interface that helps users study the reasoning behind each algorithm.
