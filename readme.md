# JavaScript Review (Vue 3 + Vite)

This project started as a review of JavaScript fundamentals and logic problems, but it has been migrated to an interactive web application using **Vue 3** and **Vite**.

## The Migration to Vue 3
The goal of integrating Vue was to provide a clean, modern, and visually appealing web interface to showcase the exercises in action. Instead of running the algorithms solely in the console, interactive components (cards) are now rendered to clearly display:
- The exercise title.
- The input used.
- The exact output evaluated in real-time by JavaScript.

Thanks to **Vite**, the development environment is extremely fast. The pure logic of the exercises has been kept separate from the view (UI), making the code easy to read and study in isolation.

## Implemented Exercises

The project includes several classic programming algorithms and problems (located in `src/utils/problems.js`), among them:

1. **Two Sum:** Finds the indices of two numbers in an array that, when added together, equal a target value. Optimized using a `Map` structure ($O(N)$).
2. **Reverse String:** Reverses a text string directly.
3. **Palindrome:** Checks if a string is a palindrome (reads the same forwards and backwards), ignoring uppercase, lowercase, and non-alphanumeric characters.
4. **Factorial:** Calculates the factorial of a number using an iterative approach.
5. **Merge Sorted Arrays:** Combines two already sorted arrays into a single sorted array.
6. **Flatten Array:** Flattens an array containing other nested arrays at multiple levels using recursion.

## Project Structure

- `src/utils/problems.js`: Contains the pure JavaScript functions that solve the exercises.
- `src/App.vue`: The root component that structures the main page and passes the exercise data to the visual components.
- `src/components/ExerciseCard.vue`: A UI component designed to individually display each exercise with visual contrast for inputs and outputs.
- `00_Introduction.js`: File with examples and fundamental JavaScript concepts.

## How to Run the Project

1. Install the dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open the local URL (usually `http://localhost:5173/`) in your browser to interact with the project.
