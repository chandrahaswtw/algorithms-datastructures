# Data Structures & Algorithms in TypeScript

A complete Data Structures and Algorithms (DSA) refresher, fully implemented in TypeScript.
This project is designed for learning, revision, and interview preparation, with clear implementations and practical problem-solving.

## Project Structure

The repository is organized into three main sections:

### 1. Algorithms

A comprehensive collection of algorithms implemented from scratch in TypeScript.

The full list of algorithms is available in this section.
- Recursion
    - Factorial
    - File searcher problem
    - Febinocci
    - Febinocci with memoization
- Search
    - Linear search
    - Binary search
- Sorting
    - Bubble sort
    - Quick sort
    - Merge sort
    - Insertion sort
    - Selection sort

### 2. Data Structures

Core data structures with clean, well-documented TypeScript implementations.

The full list of data structures is available in this section.

### 3. Daily Dose of Problems

A curated set of problems to reinforce concepts through hands-on practice.

The full list of problems is available in this section.



# Algorithm Complexity Guide (Time & Space)

This document explains **time complexity** and **space complexity** using Big-O notation, with common patterns and examples used in algorithm design and interviews.

---

## 1. What is Complexity?

- **Time Complexity**: How the running time of an algorithm grows as input size `n` increases.
- **Space Complexity**: How much extra memory an algorithm uses as input size `n` increases.

Both are expressed using **asymptotic notation**, focusing on growth rate rather than exact values.

---

## 2. Asymptotic Notations

| Notation | Meaning |
|--------|--------|
| **O(f(n))** | Upper bound (worst case) |
| **Ω(f(n))** | Lower bound (best case) |
| **Θ(f(n))** | Tight bound (average/typical case) |

In practice, **Big-O** is used most often.

---

## 3. Common Time Complexities

### O(1) — Constant Time
Execution time does not depend on input size.

**Examples:**
- Accessing an array element by index
- Hash map lookup (average case)

```text
arr[5]
```

---

### O(log n) — Logarithmic Time
Input size is reduced at each step.

**Examples:**
- Binary search
- Searching in a balanced BST

```text
n → n/2 → n/4 → ...
```

---

### O(n) — Linear Time
Execution time grows directly with input size.

**Examples:**
- Iterating over an array
- Linear search

```text
for i in range(n)
```

---

### O(n log n) — Linearithmic Time
Combination of linear and logarithmic operations.

**Examples:**
- Merge Sort
- Quick Sort (average case)

---

### O(n²) — Quadratic Time
Nested iterations over input.

**Examples:**
- Bubble Sort
- Selection Sort
- Nested loops over the same array

```text
for i in range(n):
  for j in range(n):
```

---

### O(n³) — Cubic Time
Three nested loops.

**Examples:**
- Floyd–Warshall Algorithm
- Matrix multiplication (naive)

---

### O(2ⁿ) — Exponential Time
Each input doubles the computation.

**Examples:**
- Recursive Fibonacci (naive)
- Power set generation

---

### O(n!) — Factorial Time
All permutations are evaluated.

**Examples:**
- Traveling Salesman (brute force)
- Permutation generation

---

## 4. Time Complexity Comparison (Best → Worst)

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(n³)
O(2ⁿ)
O(n!)
```

---

## 5. Space Complexity Explained

Space complexity includes:

1. **Input Space** – memory required to store inputs
2. **Auxiliary Space** – extra memory used by the algorithm

> Space Complexity = Input Space + Auxiliary Space

---

## 6. Common Space Complexities

### O(1) — Constant Space
No extra memory used regardless of input size.

**Examples:**
- Swapping two variables
- Iterative algorithms

---

### O(n) — Linear Space
Extra memory grows with input size.

**Examples:**
- Temporary arrays
- Hash maps storing `n` elements

---

### O(n²) — Quadratic Space
2D structures dependent on input size.

**Examples:**
- Adjacency matrix for graphs
- DP tables with two dimensions

---

### O(log n) — Logarithmic Space
Due to recursion stack depth.

**Examples:**
- Binary search (recursive)
- Divide-and-conquer algorithms

---

## 7. Recursion and Space Complexity

Each recursive call adds a stack frame.

| Algorithm | Stack Space |
|--------|------------|
| Binary Search | O(log n) |
| DFS (worst case) | O(n) |
| Merge Sort | O(log n) |

---

## 8. In-place vs Out-of-place Algorithms

| Type | Space Usage |
|----|------------|
| **In-place** | O(1) or O(log n) |
| **Out-of-place** | O(n) or more |

**Examples:**
- In-place: Quick Sort
- Out-of-place: Merge Sort

---

## 9. Practical Tips

- Ignore constants and lower-order terms
  - O(2n) → O(n)
  - O(n² + n) → O(n²)

- Worst-case time complexity is usually preferred
- Optimize **time first**, then **space**, unless memory is critical

---

## 10. Summary Table

| Complexity | Name | Typical Use |
|----------|------|-------------|
| O(1) | Constant | Hash access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Iteration |
| O(n log n) | Linearithmic | Efficient sorting |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Backtracking |
| O(n!) | Factorial | Permutations |

---

## 11. Final Notes

Understanding complexity helps you:
- Choose the right algorithm
- Write scalable code
- Perform well in interviews and system design

---


