# Queue Data Structure

## Overview

A **Queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle.  
The first element added to the queue is the first one to be removed.

Think of it like a real-world queue:
- People join at the end
- People leave from the front

---

## Basic Operations

| Operation | Description |
|---------|-------------|
| Enqueue | Adds an element to the rear of the queue |
| Dequeue | Removes an element from the front of the queue |
| Front / Peek | Returns the front element without removing it |
| isEmpty | Checks whether the queue is empty |
| Size | Returns the number of elements in the queue |

---

## Implementation Approaches

### 1. Array-Based Queue
- Fixed or dynamic size
- Efficient but may cause unused space

### 2. Linked List-Based Queue
- Dynamic size
- No wasted space
- Slight memory overhead

---

## Time Complexity

| Operation | Time Complexity | Comments |
|---------|----------------|----------------|
| Enqueue | O(1) |
| Dequeue | O(n) | If using arrays, as when element is removed from zero index, reordering elements takes O(n)
| Peek | O(1) |
| isEmpty | O(1) |

---

## Common Use Cases

- Task scheduling
- Request handling in servers
- Breadth-First Search (BFS)
- Printer queues
- Message queues

---

## Advantages

- Simple and intuitive
- Fair ordering of elements
- Efficient insertion and removal

---

## Limitations

- No random access
- Less flexible than other data structures
- Fixed-size queues can overflow

---

## Queue vs Stack

| Feature | Queue | Stack |
|------|-------|-------|
| Principle | FIFO | LIFO |
| Insertion | Enqueue | Push |
| Removal | Dequeue | Pop |
| Access Ends | Two ends | One end |

---

## Summary

A queue is an essential data structure used whenever order and fairness are important.  
It plays a critical role in scheduling, buffering, and real-time processing systems.

---

## References

- Data Structures and Algorithms textbooks
- Operating Systems concepts
- Computer Science fundamentals
