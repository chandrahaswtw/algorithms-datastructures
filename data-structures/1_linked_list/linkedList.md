# Linked List

A **Linked List** is a linear data structure in which elements, known as **nodes**, are connected using references. Unlike arrays, linked list elements are **not stored in contiguous memory locations**.

Each node contains:
- **Data**: the value stored in the node
- **Reference (link)**: a pointer to the next node in the list

---

## Core Terminology

- **Node**  
  The fundamental unit of a linked list containing data and a reference to another node.

- **Head**  
  The first node in the list.

- **Tail**  
  The last node in the list. Its reference points to `null` (or back to the head in circular lists).

---

## Types of Linked Lists

### 1. Singly Linked List
Each node points only to the next node.

Flow:
```
[Data | Next] -> [Data | Next] -> [Data | null]
```

Characteristics:
- One-directional traversal
- Less memory overhead than doubly linked lists

---

### 2. Doubly Linked List
Each node has two references:
- One to the next node
- One to the previous node

Flow:
```
null <- [Prev | Data | Next] <-> [Prev | Data | Next] -> null

```

Characteristics:
- Bidirectional traversal
- Easier deletion operations
- Requires more memory due to extra reference

---

### 3. Circular Linked List
The last node points back to the first node instead of `null`.

Flow:
```
[Data | Next] -> [Data | Next]
       ^__________________|
```

Characteristics:
- No `null` reference
- Useful for continuous data traversal

---

## Common Operations

| Operation | Description |
|----------|-------------|
| Insertion | Adding a new node at the beginning, end, or a specific position |
| Deletion | Removing a node by value or position |
| Traversal | Visiting each node in the list sequentially |
| Search | Finding a specific value in the list |
| Update | Modifying the data of an existing node |

---

## Time Complexity Overview

| Operation | Complexity |
|----------|------------|
| Insertion at beginning | O(1) |
| Insertion at end | O(n) |
| Deletion | O(n) |
| Search | O(n) |
| Traversal | O(n) |

---

## Advantages of Linked Lists

- Dynamic size
- Efficient insertion and deletion
- No memory reallocation required
- Flexible memory usage

---

## Disadvantages of Linked Lists

- No random access
- Extra memory for references
- Slower traversal compared to arrays
- More complex implementation

---

## Linked List vs Array

| Feature | Linked List | Array |
|-------|------------|-------|
| Memory allocation | Non-contiguous | Contiguous |
| Size | Dynamic | Fixed or dynamic |
| Access | Sequential | Random |
| Insert/Delete | Efficient | Costly |
| Memory overhead | Higher | Lower |

---

## Use Cases

- Stacks and queues
- Undo / redo operations
- Music playlists
- Browser navigation
- Memory management systems

---

## Summary

A linked list is a dynamic data structure well-suited for applications requiring frequent insertions and deletions. While it lacks random access and has additional memory overhead, it provides flexibility that arrays cannot.
