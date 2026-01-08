# Stack Data Structure

## Overview

A **Stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle.  
The last element added to the stack is the first one to be removed.

Think of it like a stack of plates:
- You add plates on top
- You remove plates from the top

---

## Key Characteristics

- **Access order:** Last In, First Out (LIFO)
- **Insertion:** Allowed only at one end (top)
- **Removal:** Allowed only from the same end (top)
- **No random access** to elements

---

## Basic Operations

| Operation | Description |
|---------|-------------|
| Push    | Adds an element to the top of the stack |
| Pop     | Removes the top element from the stack |
| Peek / Top | Returns the top element without removing it |
| isEmpty | Checks whether the stack is empty |
| Size    | Returns the number of elements in the stack |

---

## Implementation Approaches

A stack can be implemented using:

### 1. Array-Based Stack
- Uses a fixed or dynamic array
- Faster access
- May cause overflow if size is fixed

### 2. Linked List-Based Stack
- Uses nodes linked together
- No fixed size limitation
- Slightly more memory overhead

---

## Time Complexity

| Operation | Time Complexity |
|---------|----------------|
| Push    | O(1) |
| Pop     | O(1) |
| Peek   | O(1) |
| isEmpty | O(1) |

---

## Common Use Cases

- Function call management (Call Stack)
- Undo / Redo functionality
- Expression evaluation (postfix, prefix)
- Syntax parsing
- Backtracking algorithms
- Reversing data

---

## Advantages

- Simple and efficient
- Fast insertion and deletion
- Useful for recursive and nested operations

---

## Limitations

- No direct access to middle elements
- Limited usability compared to other data structures
- Potential overflow in array-based implementations

---
