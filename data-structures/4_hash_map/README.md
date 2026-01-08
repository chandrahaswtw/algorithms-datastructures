# Hash Map (Hash Table)

## Overview

A **Hash Map** is a data structure that stores data in **key-value pairs**.  
It uses a **hash function** to compute an index where the value is stored.

Hash maps provide **fast access** to data based on keys.

---

## Key Characteristics

- Stores data as **key-value pairs**
- Uses a **hash function** for indexing
- Average constant-time operations
- Keys are unique

---

## Basic Operations

| Operation | Description |
|---------|-------------|
| Put / Insert | Adds or updates a key-value pair |
| Get | Retrieves the value for a given key |
| Remove | Deletes a key-value pair |
| ContainsKey | Checks if a key exists |
| Size | Returns number of entries |

---

## Hash Function

A **hash function**:
- Converts a key into an integer index
- Should distribute keys uniformly
- Minimizes collisions

Good hash functions improve performance.

---

## Time Complexity (Average Case)

| Operation | Time Complexity |
|---------|----------------|
| Insert | O(1) |
| Get | O(1) |
| Delete | O(1) |

## Advantages

- Extremely fast lookups
- Flexible key types
- Scales well with large datasets

---

## Limitations

- No guaranteed ordering
- Poor hash functions degrade performance
- Uses extra memory