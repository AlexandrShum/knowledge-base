# Big O Notation

## What is Big O?
Big O notation shows how the time of an algorithm changes as the input size (n) grows. It helps to compare algorithm efficiency.

## Main complexities

| Notation  | Description                   | Example               |
|-----------|-------------------------------|------------------------|
| O(1)      | Constant time                 | Accessing an array item |
| O(log n)  | Logarithmic time              | Binary search          |
| O(n)      | Linear time                   | Loop through an array  |
| O(n log n)| Quasilinear time              | Quick sort             |
| O(n²)     | Quadratic time                | Nested loops           |
| O(2ⁿ)     | Exponential time              | Solving the knapsack problem |

## Examples with different complexity
For practical examples, see [big-o-examples.js](big-o-examples.js).

## How to analyze complexity?
1. Ignore constants (O(2n) → O(n)).
2. Remove insignificant terms (O(n² + n) → O(n²)).
3. Consider the worst case scenario.

